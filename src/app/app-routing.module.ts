import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginService } from './login.service';

const routes: Routes = [{
  path:"page1",
  component:Page1Component,
  canActivate:[()=>{
    return inject(LoginService).isLegginged ? true : false
  }]
},{
  path:"page2",
  component:Page2Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
