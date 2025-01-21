import { Component,Input } from '@angular/core';
import { IconIndexComponent } from '../icon-index/icon-index.component';

@Component({
    selector: 'app-button-index-home',
    imports: [IconIndexComponent],
    templateUrl: './button-index-home.component.html',
    styleUrl: './button-index-home.component.css'
})
export class ButtonIndexHomeComponent {
     onButtonClick(){
          alert('teste botão')
        }
        @Input() buttonText:string='';
        @Input() iconClass:string='';
        @Input() iconColor:string='';
        @Input() iconSize:string='';
        @Input() iconText:string='';

        @Input()
         buttonStyle: 'btn-home' | 'btn-home' = 'btn-home' ;
}
