

import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component'; // Componente raiz
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withFetch()), // Habilita HttpClient com fetch
    importProvidersFrom(ReactiveFormsModule), // Importa módulos reativos
    provideRouter(routes), // Configura o roteamento
  ],
}).catch((err) => console.error(err));
