import { Component,Input,EventEmitter,Output } from '@angular/core';
import { IconComponent } from '../../tabela/components/icon/icon.component';

@Component({
  selector: 'app-button-menu-lateral',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './button-menu-lateral.component.html',
  styleUrl: './button-menu-lateral.component.css'
})
export class ButtonMenuLateralComponent {
  btnClicked(){
    alert('teste botão');
  }

@Input() iconClass:string='';
@Input() iconColor:string='';
@Input() iconSize:string='';

}
