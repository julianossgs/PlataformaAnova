import { Component } from '@angular/core';
import { ButtonIndexComponent } from "../button-index/button-index.component";



@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ButtonIndexComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
