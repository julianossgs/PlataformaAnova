import { Component,Input } from '@angular/core';

@Component({
    selector: 'app-link',
    imports: [],
    templateUrl: './link.component.html',
    styleUrl: './link.component.css'
})
export class LinkComponent {
    @Input({required:true})
    linkText:string = '';

    @Input({required:true})
     iconStyle:string = '';
}
