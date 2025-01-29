import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-button-grafic-index',
  imports: [CommonModule],
  templateUrl: './button-grafic-index.component.html',
  styleUrl: './button-grafic-index.component.css'
})
export class ButtonGraficIndexComponent {
  @Input() buttonText: string = ''; // Texto do botão
  @Input() iconClass: string = ''; // Ícone do botão
  @Input() apiUrl: string = ''; // Endpoint da API
  @Output() buttonClick = new EventEmitter<any>(); // Emissor de evento

  constructor(private http: HttpClient) {}

  onClick() {
    if (this.apiUrl) {
      this.http.get(this.apiUrl).subscribe(response => {
        console.log(`Resposta do endpoint ${this.apiUrl}:`, response);
        this.buttonClick.emit(response); // Emite a resposta para o componente pai
      });
    } else {
      console.log('Nenhum endpoint definido para este botão');
      this.buttonClick.emit(null);
    }
  }
}
