import { Component, inject } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-functional-router-guard';

  loginService = inject(LoginService)
  toggleLogin(){
    this.loginService.isLegginged = !this.loginService.isLegginged
  }
}
