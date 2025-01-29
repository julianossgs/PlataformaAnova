import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-input-select-grafic-index',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './input-select-grafic-index.component.html',
  styleUrl: './input-select-grafic-index.component.css'
})
export class InputSelectGraficIndexComponent implements OnInit {
  @Input() apiUrl: string = ''; // Endpoint para carregar as opções
  @Input() iconClass: string = 'bi bi-list-nested';
  @Output() selectionChange = new EventEmitter<string>(); // Evento emitido ao selecionar

  selectControl = new FormControl('');
  options: { value: string; label: string }[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOptions();
    this.selectControl.valueChanges.subscribe(value => {
      this.selectionChange.emit();
    });
  }

  fetchOptions() {
    if (this.apiUrl) {
      this.http.get<any[]>(this.apiUrl).subscribe(data => {
        this.options = data.map(item => ({
          value: item.id,
          label: item.nome
        }));
      });
    } else {
      this.options = [
        { value: 'ANR Strategy', label: 'ANR Strategy' },
        { value: 'ANR Flex', label: 'ANR Flex' },
        { value: 'ANR Prev Pro BR', label: 'ANR Prev Pro BR' },
        { value: 'ANR Prev Pro USA', label: 'ANR Prev Pro USA' }
      ];
    }
  }
}
