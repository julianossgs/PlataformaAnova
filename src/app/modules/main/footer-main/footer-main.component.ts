import { Component } from '@angular/core';
import { ButtonNavbarComponent } from '../../tabela/components/button-navbar/button-navbar.component';

@Component({
    selector: 'app-footer-main',
    imports: [],
    template: `

`,
    styleUrls: ['./footer-main.component.css']
})
export class FooterMainComponent {
  btnClicked(){
    alert('teste botão')
  }
}
