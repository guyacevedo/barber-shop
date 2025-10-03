import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthFacade } from '../../features/auth/auth.facade';
import { UserRoles } from '../enums';

export const recordGuard = (
  route: ActivatedRouteSnapshot
): boolean => {
  const authFacade = inject(AuthFacade);
  const router = inject(Router);
  const user = authFacade.user();

  const clientIdFromRoute = route.paramMap.get('id');

  if (!user || !clientIdFromRoute) {
    router.navigate(['/']);
    return false;
  }

  // A specialist can see any client's  record.
  if (user.role === UserRoles.SPECIALIST) {
    return true;
  }

  // A client can only see their own  record.
  if (user.role === UserRoles.CLIENT) {
    if (user.id === clientIdFromRoute) {
      return true;
    }
  }

  router.navigate(['/dashboard/client']);
  return false;
};
