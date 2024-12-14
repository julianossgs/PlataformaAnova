import { Routes } from '@angular/router';
import { HomeLoginComponent } from './modules/login/pages/home-login/home-login.component';
import { HomeRegisterComponent } from './modules/login/pages/home-register/home-register.component';


export const routes: Routes = [
  {path:'login',component:HomeLoginComponent},
  {path:'registro',component:HomeRegisterComponent},

  {path: '', redirectTo: '/login', pathMatch: 'full' }
];
