import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-select-grafic-index',
  standalone: true,
  imports:[CommonModule,ReactiveFormsModule],
  templateUrl: './input-select-grafic-index.component.html',
  styleUrl: './input-select-grafic-index.component.css'
})
export class InputSelectGraficIndexComponent implements OnInit {
  @Input() apiUrl: string = ''; // Endpoint para carregar as opções
  @Input() iconClass: string = 'bi bi-list-nested';
  @Output() selectionChange = new EventEmitter<string>(); // Evento emitido ao selecionar

  selectControl = new FormControl<string | null>('');
  options: { value: string; label: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOptions();
    this.selectControl.valueChanges.subscribe(value => {
      console.log(`Carteira selecionada: ${value}`);
      this.selectionChange.emit(value ?? '');
    });
  }

  fetchOptions() {
    if (this.apiUrl) {
      this.http.get<any[]>(this.apiUrl).subscribe(
        data => {
          this.options = data.map(item => ({
            value: item.id,
            label: item.nome
          }));
        },
        error => {
          console.error('Erro ao carregar as opções do select:', error);
        }
      );
    }
  }
}
