import { Component,Input } from '@angular/core';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input-monetary-index',
    imports: [CurrencyMaskModule, FormsModule],
    templateUrl: './input-monetary-index.component.html',
    styleUrl: './input-monetary-index.component.css'
})
export class InputMonetaryIndexComponent {
    @Input({required:true})
       placeholderText:string='';

       @Input() inputId: string = '';

       @Input({required:true}) type:string = 'text';
       name:string='';

       nameInput:string='';

       @Input({required:true})
        inputStyle:'input01'|'input02'|'input03'| 'input04' ='input01';
}
