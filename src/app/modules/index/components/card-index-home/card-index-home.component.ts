import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonIndexHomeComponent } from "../button-index-home/button-index-home.component";
@Component({
  selector: 'app-card-index-home',
  standalone: true,
  imports: [CommonModule, ButtonIndexHomeComponent],
  templateUrl: './card-index-home.component.html',
  styleUrl: './card-index-home.component.css'
})
export class CardIndexHomeComponent {

}
