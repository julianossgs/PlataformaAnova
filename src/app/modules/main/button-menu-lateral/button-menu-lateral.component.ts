import { Component,Input,EventEmitter,Output } from '@angular/core';
import { IconComponent } from '../../tabela/components/icon/icon.component';

@Component({
    selector: 'app-button-menu-lateral',
    imports: [IconComponent],
    templateUrl: './button-menu-lateral.component.html',
    styleUrl: './button-menu-lateral.component.css'
})
export class ButtonMenuLateralComponent {
  @Output() buttonClicked = new EventEmitter<void>(); // Emissor de evento

  btnClicked() {
      this.buttonClicked.emit(); // Emite o evento ao clicar
  }

@Input() iconClass:string='';
@Input() iconColor:string='';
@Input() iconSize:string='';

}
