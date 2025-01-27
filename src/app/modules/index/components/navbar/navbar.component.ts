import { Component } from '@angular/core';
import { InputMonetaryIndexComponent } from "../input-monetary-index/input-monetary-index.component";

@Component({
    selector: 'app-navbar',
    imports: [InputMonetaryIndexComponent],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
