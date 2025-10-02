import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

// Firebase imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore } from '@angular/fire/firestore';
import { getFirestore } from 'firebase/firestore';

// Environment import
import { environment } from '../environments/environment.prod';
import { AUTH_REPOSITORY } from './core/interfaces/auth.repository.token';
import { SPECIALTY_REPOSITORY } from './core/interfaces/specialty.repository.token';
import { USER_REPOSITORY } from './core/interfaces/user.repository.token';
import { FirebaseAuthService } from './services/firebase/firebase-auth.service';
import { FirebaseSpecialtyService } from './services/firebase/firebase-specialty.service';
import { FirebaseUserService } from './services/firebase/firebase-user.service';
import { provideHttpClient } from '@angular/common/http';
import { APPOINTMENT_REPOSITORY } from './core/interfaces/appointment.repository.token';
import { FirebaseAppointmentService } from './services/firebase/firebase-appointment.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled' })),

    // Firebase configuration and services
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),

    // Service providers
    { provide: AUTH_REPOSITORY, useClass: FirebaseAuthService },
    { provide: USER_REPOSITORY, useClass: FirebaseUserService },
    { provide: SPECIALTY_REPOSITORY, useClass: FirebaseSpecialtyService },
    { provide: APPOINTMENT_REPOSITORY, useClass: FirebaseAppointmentService },

    // Language provide
    { provide: LOCALE_ID, useValue: 'es' },
  ]
};
