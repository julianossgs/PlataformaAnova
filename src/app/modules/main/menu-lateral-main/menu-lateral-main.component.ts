import { Component } from '@angular/core';
import { ButtonMenuLateralComponent } from "../button-menu-lateral/button-menu-lateral.component";

@Component({
    selector: 'app-menu-lateral-main',
    imports: [ButtonMenuLateralComponent],
    templateUrl: './menu-lateral-main.component.html',
    styleUrl: './menu-lateral-main.component.css'
})
export class MenuLateralMainComponent {
  btnClicked(){
    alert('teste botão');
  }
}
