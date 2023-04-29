import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../login.service';
import { tap } from 'rxjs';
export const authGuardFn:CanActivateFn = ()=>{
  const route = inject(Router)
  return inject(LoginService).isLegginged.pipe(tap(
    isLoggedIn=>{
      !isLoggedIn && route.navigate(["/no-access"])
    }
  ))
}
