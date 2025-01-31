import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-select-index-card-search',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './input-select-index-card-search.component.html',
  styleUrl: './input-select-index-card-search.component.css'
})
export class InputSelectIndexCardSearchComponent implements OnInit {
  @Input() inputSelectId: string = '';
  @Input() selectedText: string = 'Selecione a Carteira';
  @Output() selectionChange = new EventEmitter<string>(); // Emite evento ao selecionar uma opção

  listItems: { name: string }[] = [];

  private apiUrl = 'http://vps40250.publiccloud.com.br:5010/api/get_grafico_rentabilidade';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOptions();
  }

  fetchOptions() {
    this.http.get<any[]>(this.apiUrl).subscribe(
      data => {
        this.listItems = data.map(item => ({ name: item.nome }));
      },
      error => {
        console.error('Erro ao carregar as opções do select:', error);
        // Se a API falhar, use opções padrões
        this.listItems = [
          { name: 'ANR Strategy' },
          { name: 'ANR Flex' },
          { name: 'ANR Prev Pro BR' },
          { name: 'ANR Prev Pro USA' }
        ];
      }
    );
  }

  onSelectionChangeMobile(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(`Carteira selecionada: ${selectedValue}`);
    this.selectionChange.emit(selectedValue); // Emite a opção selecionada
  }
}
