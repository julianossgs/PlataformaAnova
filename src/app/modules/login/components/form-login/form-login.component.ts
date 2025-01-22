import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
    CommonModule,
    HttpClientModule,
  ],
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'], // Corrigido aqui
})
export class FormLoginComponent {
  isLoginOrRegister = true;
  loginForm: FormGroup;
  apiUrl = 'http://vps40250.publiccloud.com.br:5010/api/login'; // Caminho relativo para usar o proxy
  loginMessage = ''; // Mensagem de feedback ao usuário
  isLoading = false; // Controle de estado de carregamento

  constructor(private http:HttpClient, private fb: FormBuilder,
    private router: Router) {
    // Criação do formulário reativo
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  // Método para tratar a submissão do formulário
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true; // Exibe indicador de carregamento
      const { email, password } = this.loginForm.value;

      // Enviando dados para a API
      this.http
        .post(this.apiUrl, { username: email, password }, {
          headers: { 'Content-Type': 'application/json' },
        })
        .subscribe({
          next: (response) => {
            this.isLoading = false;
            this.loginMessage = 'Login realizado com sucesso!';
            console.log('Login realizado com sucesso!', response);
             // Redirecionar para a página home
             this.router.navigate(['/home']);

          },
          error: (error) => {
            this.isLoading = false;
            this.loginMessage =
              'Erro ao realizar login. Verifique suas credenciais.';
            console.error('Erro ao realizar login:', error);
            // Exiba mensagens de erro para o usuário
          },
        });
    } else {
      this.loginMessage = 'Formulário inválido! Verifique os campos.';
    }
  }
}
