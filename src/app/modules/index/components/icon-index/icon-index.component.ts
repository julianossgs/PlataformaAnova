import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-icon-index',
    imports: [CommonModule],
    templateUrl: './icon-index.component.html',
    styleUrl: './icon-index.component.css'
})
export class IconIndexComponent {
    @Input() iconClass:string='';
     @Input() cor:string='';
     @Input() size:string='';
     @Input() title:string='';
}
