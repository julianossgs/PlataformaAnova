import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from "../form/form.component";
import { ButtonModalComponent } from '../button-modal/button-modal.component';

@Component({
    selector: 'app-modal',
    imports: [
        FormsModule,
        CommonModule,
        FormComponent, ButtonModalComponent
    ],
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.css'
})
export class ModalComponent {

 
}

