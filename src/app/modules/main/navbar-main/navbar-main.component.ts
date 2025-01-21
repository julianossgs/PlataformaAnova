import { Component,Input,Output,EventEmitter} from '@angular/core';
import { ButtonNavbarComponent } from '../../tabela/components/button-navbar/button-navbar.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar-main',
  standalone: true,
  imports: [
    CommonModule],
  template: `

`,
styleUrls: ['./navbar-main.component.css']



})
export class NavbarMainComponent {

     @Output() buttonClicked = new EventEmitter<void>();
             btnClicked(){
             this.buttonClicked.emit();
           }

         @Input() iconClass:string='';
         @Input() iconColor:string='';
         @Input() iconSize:string='';
}
