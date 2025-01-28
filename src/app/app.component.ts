import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarMainComponent } from "./modules/main/navbar-main/navbar-main.component";
import { FooterMainComponent } from "./modules/main/footer-main/footer-main.component";

@Component({
  selector: 'app-root',
  imports:[CommonModule,
    RouterOutlet,
    NavbarMainComponent,
    FooterMainComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  isLoginOrRegisterRoute: boolean = false;
  constructor(private router: Router) {


    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {
        console.log('URL após redirecionamento:', event.urlAfterRedirects);
        // Define as rotas que ocultam os componentes de navbar e footer
        this.isLoginOrRegisterRoute = ['/login', '/register'].includes(
          event.urlAfterRedirects
        );
        
      }
    });

  }
}
