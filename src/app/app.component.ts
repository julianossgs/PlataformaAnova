import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarMainComponent } from "./modules/main/navbar-main/navbar-main.component";
import { FooterMainComponent } from "./modules/main/footer-main/footer-main.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { NavigationEnd } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet,
        NavbarMainComponent,
        FooterMainComponent,
        CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  shouldShowNavbar = true;
  shouldShowFooter = true;

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.shouldShowNavbar = !this.isLoginOrRegisterRoute();
      this.shouldShowFooter = !this.isLoginOrRegisterRoute();
    });
  }

  private isLoginOrRegisterRoute(): boolean {
    const currentRoute = this.router.url;
    return currentRoute.includes('login') || currentRoute.includes('register');
  }

}
