import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-home-register',
  standalone: true,
  imports: [ButtonComponent,
    InputComponent],
  templateUrl: './home-register.component.html',
  styleUrl: './home-register.component.css'
})
export class HomeRegisterComponent {

}
