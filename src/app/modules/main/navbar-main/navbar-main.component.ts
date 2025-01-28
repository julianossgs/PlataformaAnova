import { Component,Input,Output,EventEmitter} from '@angular/core';
// import { ButtonNavbarComponent } from '../../tabela/components/button-navbar/button-navbar.component';
import { CommonModule } from '@angular/common';
import { ButtonNavbarComponent } from "../../tabela/components/button-navbar/button-navbar.component";


@Component({
    selector: 'app-navbar-main',
    standalone:true,
    imports: [
    CommonModule,
    ButtonNavbarComponent
],
    templateUrl: './navbar-main.component.html',
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
