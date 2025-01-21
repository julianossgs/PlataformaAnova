import { Component,Input,Output,EventEmitter } from '@angular/core';
import { IconIndexComponent } from '../icon-index/icon-index.component';

@Component({
    selector: 'app-button-index-card-search',
    imports: [IconIndexComponent],
    templateUrl: './button-index-card-search.component.html',
    styleUrl: './button-index-card-search.component.css'
})
export class ButtonIndexCardSearchComponent {
      onButtonClick(){
        alert('teste botão')
      }

      @Input() iconClass:string='';
      @Input() iconColor:string='';
      @Input() iconSize:string='';
}
