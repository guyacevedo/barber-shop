import { ChangeDetectionStrategy, Component, computed, effect, inject, Signal, signal, WritableSignal, } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Specialty } from '../../../../core/models';
import { Sex, UserRoles as R, UserStatus, } from '../../../../core/enums';
import { SEX_LABELS, } from '../../../../core/enums/enum-labels';
import { AVAILABILITY_PRESETS, AVAILABILITY_PRESETS_LABELS, AVAILABILITY_PRESETS_OPTIONS, } from '../../../../core/constants/availability-presets';

import { InputCustomComponent } from '../input-custom/input-custom.component';
import { SelectCustomComponent } from '../select-custom/select-custom.component';
import { SpecialtySelectorComponent } from '../specialty-selector/specialty-selector.component';
import { CustomValidators } from '../../../../core/validators/custom-validators';
import { AuthFacade } from '../../auth.facade';
import { UserFacade } from '../../user.facade';
import { SvgIconComponent } from '../../../../shared/icons/svg-icon.component';
import { RouterLink } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { CloudinaryService } from "../../../../services/cloudinary/cloudinary.service";

// User mode to toggle forms
type UserMode = R.CLIENT | R.SPECIALIST;

@Component({
  selector: 'app-register-form',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputCustomComponent,
    SelectCustomComponent,
    SpecialtySelectorComponent,
    SvgIconComponent,
    RouterLink,
  ],
  templateUrl: './register-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block h-full w-full' },
})
export class RegisterFormComponent {
  private readonly authFacade = inject(AuthFacade);
  private readonly userFacade = inject(UserFacade);
  private readonly cloudinaryService = inject(CloudinaryService);

  // Profile picture
  readonly profilePictureUrl: WritableSignal<string> = signal(
    this.cloudinaryService.defaultProfilePictureUrl
  );
  readonly selectedFile: WritableSignal<File | null> = signal(null);

  // Options and Labels for enums properties
  readonly sexOptions = Object.values(Sex);
  readonly sexLabels = SEX_LABELS;

  // Options and Labels for availability presets
  readonly availabilityPresets = AVAILABILITY_PRESETS;
  readonly availabilityOptions = AVAILABILITY_PRESETS_OPTIONS;
  readonly availabilityLabels = AVAILABILITY_PRESETS_LABELS;

  // Birth date limits
  readonly maxBirthDate: string;
  readonly minBirthDate: string;

  // Signal for Current mode (Client or Specialist)
  readonly userMode: WritableSignal<UserMode> = signal<UserMode>(R.CLIENT);

  // Show errors - combines both facades
  submitted = false;
  get registerError(): string | null {
    return this.userFacade.error() || this.authFacade.error();
  }

  // Loading state - combines both facades
  readonly isLoading: Signal<boolean> = computed(
    () => this.authFacade.isLoading() || this.userFacade.isSaving()
  );

  // Watch loading state and disable/enable form controls
  private readonly loadingWatcher = effect(() => {
    const loading = this.isLoading();
    if (loading) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  });

  // Flag for 'onSubmit' function started
  readonly onSubmitStarted = signal(false);

  // Signal to known if the current mode is specialist or not
  readonly isSpecialist: Signal<boolean> = computed(
    () => this.userMode() === R.SPECIALIST
  );

  // Main Form
  readonly form: FormGroup;

  // Create form
  constructor(private fb: FormBuilder) {
    // Birth date limits logic
    const maxDate = new Date();
    const minDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - 18);
    minDate.setFullYear(minDate.getFullYear() - 150);
    this.maxBirthDate = maxDate.toISOString().split('T')[0];
    this.minBirthDate = minDate.toISOString().split('T')[0];

    this.form = this.createForm();
    this.updateModeValidators();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      // User base properties
      firstName: ['', [Validators.required, CustomValidators.name(2, 30)]],
      lastName: ['', [Validators.required, CustomValidators.name(2, 30)]],
      dni: ['', [Validators.required, CustomValidators.dni(7, 9)]],
      sex: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, CustomValidators.password(8, 50)]],
      birthDate: ['', [Validators.required, CustomValidators.age(18, 150)]],
      phone: ['', CustomValidators.phoneOptional(8, 15)],
      profilePicture: [null],

      // Client properties
      height: ['', [Validators.min(100), Validators.max(250)]],
      weight: ['', [Validators.min(30), Validators.max(250)]],

      // Specialist properties
      specialties: [[], [Validators.required, Validators.minLength(1)]],
      availability: [[], Validators.required],
    });
  }

  // Update the validators of the fields of the current mode
  private updateModeValidators(): void {
    // Client fields
    const height = this.form.get('height');
    const weight = this.form.get('weight');
    // Specialist fields
    const specialties = this.form.get('specialties');
    const availability = this.form.get('availability');

    if (this.isSpecialist()) {
      // Specialist: required
      specialties?.setValidators([
        Validators.required,
        Validators.minLength(1),
      ]);
      availability?.setValidators([Validators.required]);
      // Client: not required
      height?.clearValidators();
      weight?.clearValidators();
    } else {
      // Client: required
      height?.setValidators([Validators.min(100), Validators.max(250)]);
      weight?.setValidators([Validators.min(30), Validators.max(250)]);
      // Specialist: not required
      specialties?.clearValidators();
      availability?.clearValidators();
    }
    // Update validation state
    height?.updateValueAndValidity();
    weight?.updateValueAndValidity();
    specialties?.updateValueAndValidity();
    availability?.updateValueAndValidity();
  }

  // Clear the fields of the previous mode
  private clearModeFields(): void {
    if (this.isSpecialist()) {
      // Clear client fields
      this.form.get('height')?.reset('');
      this.form.get('weight')?.reset('');
    } else {
      // Clear specialist fields
      this.form.get('specialties')?.reset([]);
      this.form.get('availability')?.reset([]);
    }
  }

  // If the user mode is Client, change to Specialist, and vice versa
  toggleMode(): void {
    if (this.showSpecialtyModal()) this.closeModal();
    const newMode = this.userMode() === R.CLIENT ? R.SPECIALIST : R.CLIENT;
    this.userMode.set(newMode);
    this.clearModeFields();
    this.updateModeValidators();
  }

  // Submit action
  async onSubmit(): Promise<void> {
    if (this.form.invalid) return;

    this.onSubmitStarted.set(true);
    const formData = this.form.value;
    const email = formData.email;
    const password = formData.password;
    const dni = formData.dni;

    try {
      // Validate if DNI already exists
      const dniExists = await this.userFacade.dniExists(dni);
      if (dniExists) {
        this.submitted = true;
        return;
      }

      // 1. Submit credentials to Firebase Authentication, and get the UID
      const userUid = await this.authFacade.register(email, password);

      // Check if registration was successful
      if (!userUid) {
        this.submitted = true;
        return;
      }

      // 2. Upload profile picture if selected
      let profilePictureUrl = this.cloudinaryService.defaultProfilePictureUrl;
      if (this.selectedFile()) {
        profilePictureUrl = await this.cloudinaryService.uploadImage(
          this.selectedFile()!
        );
      }

      const submitData = this.isSpecialist()
        ? {
            ...this.getSpecialistData(formData),
            id: userUid,
            role: R.SPECIALIST,
            registrationDate: Timestamp.now(),
            status: UserStatus.ACTIVE,
            profilePictureUrl,
          }
        : {
            ...this.getClientData(formData),
            id: userUid,
            role: R.CLIENT,
            registrationDate: Timestamp.now(),
            status: UserStatus.ACTIVE,
            profilePictureUrl,
          };
      delete submitData.password;

      console.log('Form values:', formData);
      console.log('Data to submit:', submitData);

      // 3. Submit the user data to Firestore
      await this.userFacade.createUser(submitData);

      // 4. Set _user private signal in authFacade
      this.authFacade.setUser(submitData);

      // 5. Redirect to dashboard by role
      this.authFacade.redirectUserByRole(submitData);
    } catch (error) {
      console.error('Register error', error);
      this.submitted = true;
    }
  }

  // Get only the relevant data for a specialist
  private getSpecialistData(formData: any): any {
    const {
      // Base fields (common to both types)
      firstName,
      lastName,
      dni,
      sex,
      email,
      birthDate,
      phone,
      // Specialist fields
      specialties,
      availability,
      // Client fields (not included in the return)
      height,
      weight,
      profilePicture,
      ...rest
    } = formData;

    // The selected value in the select is the name of the preset
    const availabilityName = availability;
    // Find the corresponding Availability object
    let mappedAvailability = availability;
    if (typeof availability === 'string' && availability) {
      const preset = this.availabilityPresets.find(
        (p) => p.name === availability
      );
      mappedAvailability = preset ? preset.value : [];
    }

    return {
      firstName,
      lastName,
      dni,
      sex,
      email,
      birthDate,
      phone,
      specialties,
      availability: mappedAvailability,
      availabilityName,
      // Other fields (not client)
      ...rest,
    };
  }

  // Get only the relevant data for a client
  private getClientData(formData: any): any {
    const {
      // Base fields (common to both types)
      firstName,
      lastName,
      dni,
      sex,
      email,
      birthDate,
      phone,
      // Client fields
      height,
      weight,
      // Specialist fields (not included in the return)
      specialties,
      availability,
      profilePicture,
      ...rest
    } = formData;

    return {
      firstName,
      lastName,
      dni,
      sex,
      email,
      birthDate,
      phone,
      height,
      weight,
      // Other fields (not specialist)
      ...rest,
    };
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.selectedFile.set(file);
      this.profilePictureUrl.set(URL.createObjectURL(file));
      this.form.patchValue({ profilePicture: file });
    }
  }

  // Specialty Modal
  readonly showSpecialtyModal: WritableSignal<boolean> = signal(false);

  // Open Modal
  openSpecialtyModal(): void {
    this.showSpecialtyModal.set(true);
  }

  // Close Modal
  closeModal(): void {
    this.showSpecialtyModal.set(false);
  }

  // Get selected specialties
  onSpecialtiesSelected(specialties: Specialty[]): void {
    this.form.get('specialties')?.setValue([...specialties]);
    this.closeModal();
  }
}
