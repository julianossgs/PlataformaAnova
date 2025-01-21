import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsDirective } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import{HttpClientModule} from '@angular/common/http';


@Component({
    selector: 'app-form-login',
    imports: [ReactiveFormsModule,
        FormsModule,
        ButtonComponent,
        CommonModule,
        HttpClientModule],
    templateUrl: './form-login.component.html',
    styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  isLoginOrRegister = true;
  loginForm: FormGroup;
  apiUrl = 'http://vps40250.publiccloud.com.br:5010/api/login';
  // Endpoint da API

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // Criação do formulário reativo
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
    // Método para tratar a submissão do formulário
        onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('email: '+ email);
      console.log('password: '+ password);
      //Enviando dados para a API
      this.http.post(this.apiUrl, { username: email, password }).subscribe({
        next: (response) => {
          console.log('Login realizado com sucesso!', response);
          // Redirecione ou trate o sucesso aqui
        },
        error: (error) => {
          console.error('Erro ao realizar login:', error);
          // Exiba mensagens de erro para o usuário
        }
      });
    } else {
      console.error('Formulário inválido!');
    }
  }
}
