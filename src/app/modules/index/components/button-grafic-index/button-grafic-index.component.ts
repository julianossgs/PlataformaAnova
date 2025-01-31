import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button-grafic-index',
  standalone: true,
  templateUrl: './button-grafic-index.component.html',
  styleUrl: './button-grafic-index.component.css'
})
export class ButtonGraficIndexComponent {
  @Input() buttonText: string = ''; // Texto do botão
  @Input() iconClass: string = ''; // Ícone do botão
  @Input() apiUrl: string = ''; // Endpoint da API
  @Output() buttonClick = new EventEmitter<any>(); // Evento emitido ao clicar no botão

  constructor(private http: HttpClient) {}

  onClick(): void {
    console.log(`Botão "${this.buttonText}" clicado!`);

    if (this.apiUrl) {
      this.http.post(this.apiUrl, { nome_carteira: "ANR Strategy", data_inicial: "2023-09-08", data_final: "2023-09-11" }).subscribe(
        response => {
          console.log(`Resposta do endpoint ${this.apiUrl}:`, response);
          this.buttonClick.emit(response);
        },
        error => {
          console.error(`Erro ao chamar API ${this.apiUrl}:`, error);
        }
      );
    } else {
      console.warn('Nenhum endpoint definido para este botão');
      this.buttonClick.emit(null);
    }
  }
}
