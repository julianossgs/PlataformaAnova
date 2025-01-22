import { Component } from '@angular/core';
import { FormLoginComponent } from '../../components/form-login/form-login.component';


@Component({
    selector: 'app-home-login',
    imports: [
       FormLoginComponent
    ],
    templateUrl: './home-login.component.html',
    styleUrl: './home-login.component.css'
})
  export class HomeLoginComponent{

}
