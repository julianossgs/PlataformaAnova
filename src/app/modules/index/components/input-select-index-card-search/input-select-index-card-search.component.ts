import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-input-select-index-card-search',
    imports: [CommonModule],
    templateUrl: './input-select-index-card-search.component.html',
    styleUrl: './input-select-index-card-search.component.css'
})
export class InputSelectIndexCardSearchComponent {
   listItems=[
      {name:'Item 1'},
      {name:'Item 2'},
      {name:'Item 3'}
    ];

    @Input({required:true})
    selectedText:string='';

    @Input() inputSelectId: string = '';
}
