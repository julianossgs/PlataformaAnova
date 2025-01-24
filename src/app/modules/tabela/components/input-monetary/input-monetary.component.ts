import { Component,Input,OnInit} from '@angular/core';
import { FormsModule,FormControl,ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
    selector: 'app-input-monetary',
    imports: [FormsModule,
        CurrencyMaskModule,ReactiveFormsModule],
    templateUrl: './input-monetary.component.html',
    styleUrl: './input-monetary.component.css'
})
export class InputMonetaryComponent implements OnInit {
  @Input() formControl!: FormControl;

  @Input() inputId: string = '';
  @Input() type: string = 'text';
  @Input() placeholderText: string = '';
  @Input() maxlength: number = 100;
  @Input() minlength: number = 1;

  ngOnInit() {
    if (!this.formControl) {
      throw new Error('O formControl é obrigatório no app-input-monetary');
    }
  }
}
