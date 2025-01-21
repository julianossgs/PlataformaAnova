import { Component } from '@angular/core';
import { InputMonetaryIndexComponent } from '../input-monetary-index/input-monetary-index.component';

@Component({
  selector: 'app-card-index',
  standalone: true,
  imports: [InputMonetaryIndexComponent],
  templateUrl: './card-index.component.html',
  styleUrl: './card-index.component.css'
})
export class CardIndexComponent {

}
