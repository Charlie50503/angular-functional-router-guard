import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginService } from './login.service';
import { NoAccessComponent } from './no-access/no-access.component';
import { authGuardFn } from './guards/auth';

const routes: Routes = [{
  path:"page1",
  component:Page1Component,
  canActivate:[()=>{
    return inject(LoginService).isLegginged ? true : false
  }]
},{
  path:"page2",
  component:Page2Component,
  canActivate:[authGuardFn],
  // canActivateChild:[authGuardFn],
  // canDeactivate:[authGuardFn],
  // canMatch:[authGuardFn],
},{
  path:"no-access",
  component:NoAccessComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
