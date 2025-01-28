import { Routes} from '@angular/router';
import { HomeLoginComponent } from './modules/login/pages/home-login/home-login.component';
import { HomeRegisterComponent } from './modules/login/pages/home-register/home-register.component';
import { HomeTabelaComponent } from './modules/tabela/pages/home-tabela/home-tabela.component';
import { HomeIndexComponent } from './modules/index/pages/home-index/home-index.component';
// import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: 'login', component: HomeLoginComponent },
  { path: 'register', component: HomeRegisterComponent },
  { path: 'tabela', component: HomeTabelaComponent },
  { path: 'index', component: HomeIndexComponent },
  { path: '', redirectTo: 'tabela', pathMatch: 'full' },
  { path: '**', redirectTo: 'index' }
];
