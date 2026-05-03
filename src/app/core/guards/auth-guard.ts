import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const platformId = inject(PLATFORM_ID);
  const _router = inject(Router);

  if (isPlatformBrowser(platformId)) {
    const token = sessionStorage.getItem('userToken');

    if (token) {
      return true;
    }
  }

  _router.navigate(['/login']);
  return false;
};
