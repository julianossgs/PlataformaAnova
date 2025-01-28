import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonNavbarComponent } from '../../tabela/components/button-navbar/button-navbar.component';

@Component({
    selector: 'app-footer-main',
    standalone:true,
    imports: [CommonModule,ButtonNavbarComponent],
    templateUrl: './footer-main.component.html',
    styleUrls: ['./footer-main.component.css']
})
export class FooterMainComponent {
  btnClicked(){
    alert('teste botão')
  }
}
