import { Component,Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
    selector: 'app-button-modal',
    imports: [],
    templateUrl: './button-modal.component.html',
    styleUrl: './button-modal.component.css'
})
export class ButtonModalComponent {
   @Input({required:true})
     buttonText:string = '';

     @Input({required:true})
     buttonStyle:'bg-black-modal'|'bg-white-modal'='bg-black-modal';

    


}
