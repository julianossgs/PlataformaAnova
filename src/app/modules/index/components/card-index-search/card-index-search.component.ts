import { Component } from '@angular/core';
import { ButtonIndexCardSearchComponent } from "../button-index-card-search/button-index-card-search.component";
import { InputSelectIndexCardSearchComponent } from "../input-select-index-card-search/input-select-index-card-search.component";

@Component({
    selector: 'app-card-index-search',
    imports: [
        ButtonIndexCardSearchComponent,
        InputSelectIndexCardSearchComponent
    ],
    templateUrl: './card-index-search.component.html',
    styleUrl: './card-index-search.component.css'
})
export class CardIndexSearchComponent {

}
