//  import { bootstrapApplication } from '@angular/platform-browser';
//  import { appConfig } from './app/app.config';
//  import { AppComponent } from './app/app.component';

//  bootstrapApplication(AppComponent, appConfig)
//    .catch((err) => console.error(err));


//  import { bootstrapApplication } from '@angular/platform-browser';
//  import { provideHttpClient,withFetch } from '@angular/common/http';
//  import { importProvidersFrom } from '@angular/core';
//  import { ReactiveFormsModule } from '@angular/forms';
//  import { HomeLoginComponent } from './../src/app/modules/login/pages/home-login/home-login.component';
//  import { HomeRegisterComponent } from './app/modules/login/pages/home-register/home-register.component';


//  bootstrapApplication(HomeLoginComponent, {
//   providers: [
//     provideHttpClient(withFetch()),
//     importProvidersFrom(ReactiveFormsModule),
//   ],

// }).catch(err => console.error(err));


//import { bootstrapApplication } from '@angular/platform-browser';
//  import { provideHttpClient,withFetch } from '@angular/common/http';
//  import { importProvidersFrom } from '@angular/core';
//  import { ReactiveFormsModule } from '@angular/forms';
//  import { HomeLoginComponent } from './../src/app/modules/login/pages/home-login/home-login.component';
//  import { HomeRegisterComponent } from './app/modules/login/pages/home-register/home-register.component';


//  bootstrapApplication(HomeLoginComponent, {
//   providers: [
//     provideHttpClient(withFetch()),
//     importProvidersFrom(ReactiveFormsModule),
//   ],

// }).catch(err => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component'; // Componente raiz
import { HomeLoginComponent } from './app/modules/login/pages/home-login/home-login.component';
import { HomeRegisterComponent } from './app/modules/login/pages/home-register/home-register.component';
import { HomeTabelaComponent } from './app/modules/tabela/pages/home-tabela/home-tabela.component';
import { HomeIndexComponent } from './app/modules/index/pages/home-index/home-index.component';


// Definição das rotas
const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' }, // Redireciona para a página inicial
  { path: 'login', component: HomeLoginComponent }, // Página de login
  { path: 'register', component: HomeRegisterComponent }, // Página de registro
  { path: 'tabela', component: HomeTabelaComponent }, // Página de tabela
  { path: 'index', component: HomeIndexComponent }, // Página inicial
  { path: '**', redirectTo: '/index' }, // Redireciona para a página inicial caso a rota não seja encontrada
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Habilita HttpClient com fetch
    importProvidersFrom(ReactiveFormsModule), // Importa módulos reativos
    provideRouter(routes), // Configura o roteamento
  ],
}).catch((err) => console.error(err));
