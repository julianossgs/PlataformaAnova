import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-input-select',
    imports: [FormsModule, CommonModule],
    templateUrl: './input-select.component.html',
    styleUrl: './input-select.component.css'
})
export class InputSelectComponent {
  listItems=[
    {name:'Item 1'},
    {name:'Item 2'},
    {name:'Item 3'}
  ];

  @Input({required:true})
  selectedText:string='';

  @Input() inputSelectId: string = '';
}
