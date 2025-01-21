import { Component } from '@angular/core';
import { ButtonComponent } from "../../components/button/button.component";
import { FormRegisterComponent } from '../../components/form-register/form-register.component';

@Component({
  selector: 'app-home-register',
  standalone: true,
  imports: [
    FormRegisterComponent],
  templateUrl: './home-register.component.html',
  styleUrl: './home-register.component.css'
})
export class HomeRegisterComponent {

}
