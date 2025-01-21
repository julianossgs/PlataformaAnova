import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [ButtonComponent,

    CommonModule,ReactiveFormsModule],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  //  isLoginOrRegister = true;
    registerForm: FormGroup;
    apiUrl = '';
    // Endpoint da API

    constructor(private http: HttpClient, private fb: FormBuilder) {
      // Criação do formulário reativo
      this.registerForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],

      });
    }
      // Método para tratar a submissão do formulário
          onSubmit(): void {
      if (this.registerForm.valid) {
        const { email} = this.registerForm.value;

        // Enviando dados para a API
        this.http.post(this.apiUrl, { username: email })
        .subscribe({
          next: (response) => {
            console.log('Registro realizado com sucesso!', response);
            // Redirecione ou trate o sucesso aqui
          },
          error: (error) => {
            console.error('Erro ao realizar Registro:', error);
            // Exiba mensagens de erro para o usuário
          }
        });
      } else {
        console.error('Formulário inválido!');
      }
    }
}
