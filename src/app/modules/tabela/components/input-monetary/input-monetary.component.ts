import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
    selector: 'app-input-monetary',
    imports: [FormsModule,
        CurrencyMaskModule],
    templateUrl: './input-monetary.component.html',
    styleUrl: './input-monetary.component.css'
})
export class InputMonetaryComponent {
  @Input({required:true})
    placeholderText:string='';

    @Input() inputId: string = '';

    @Input({required:true}) type:string = 'text';
    name:string='';

    nameInput:string='';
}
