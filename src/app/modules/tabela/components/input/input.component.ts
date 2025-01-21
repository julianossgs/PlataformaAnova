
import { Component,Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import{CurrencyMaskModule} from 'ng2-currency-mask';




@Component({
    selector: 'app-input',
    imports: [FormsModule,
        CurrencyMaskModule,
        ],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({required:true})
  placeholderText:string='';

  @Input() inputId: string = '';

  @Input({required:true}) type:string = 'text';
  name:string='';

  @Input() requiredInput:boolean = true;

  nameInput:string='';



  @Input({required:true})
  inputStyle:'inputSearch' | '' ='inputSearch';


}

