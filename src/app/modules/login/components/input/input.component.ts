import { Component,Input, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input',
    imports: [FormsModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.css'
})
export class InputComponent {
  @Input({required:true})
  placeholderText:string='';

  @Input() type:string = 'text';
  name:string='';
}
