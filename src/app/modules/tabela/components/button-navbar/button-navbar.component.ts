import { Component,Input,EventEmitter,Output } from '@angular/core';
import { IconComponent } from "../icon/icon.component";

@Component({
    selector: 'app-button-navbar',
    imports: [IconComponent],
    templateUrl: './button-navbar.component.html',
    styleUrl: './button-navbar.component.css'
})
export class ButtonNavbarComponent {
  
   @Output() buttonClicked = new EventEmitter<void>();
    onButtonClick(){
      this.buttonClicked.emit();
    }

  @Input() iconClass:string='';
  @Input() iconColor:string='';
  @Input() iconSize:string='';


}
