import { Component } from '@angular/core';
import { ButtonMenuLateralComponent } from "../button-menu-lateral/button-menu-lateral.component";
import { Router } from '@angular/router';
@Component({
    selector: 'app-menu-lateral-main',
    imports: [ButtonMenuLateralComponent],
    templateUrl: './menu-lateral-main.component.html',
    styleUrl: './menu-lateral-main.component.css'
})
export class MenuLateralMainComponent {
  // Injeção do Router
  constructor(private router: Router) {}

  // Redireciona para a rota
  btnClicked() {
    this.router.navigate(['/tabela']);
}
}
