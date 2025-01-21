import { Component,Input,Output,EventEmitter } from '@angular/core';
import { IconIndexComponent } from "../icon-index/icon-index.component";

@Component({
  selector: 'app-button-index',
  standalone: true,
  imports: [IconIndexComponent],
  templateUrl: './button-index.component.html',
  styleUrl: './button-index.component.css'
})
export class ButtonIndexComponent {

    onButtonClick(){
      alert('teste botão')
    }
    @Input() buttonText:string='';
    @Input() iconClass:string='';
    @Input() iconColor:string='';
    @Input() iconSize:string='';
    @Input() iconText:string='';

    
}
