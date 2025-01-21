import { Component } from '@angular/core';
// import { InputComponent } from '../../components/input/input.component';
// import { ButtonComponent } from '../../components/button/button.component';
// import { HttpClient } from '@angular/common/http';
// import { Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
// import { FormBuilder } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { importProvidersFrom } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { NgxEchartsDirective } from 'ngx-echarts';
// import { FormsModule } from '@angular/forms';
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
