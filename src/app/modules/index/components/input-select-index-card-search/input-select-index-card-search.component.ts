import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-select-index-card-search',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './input-select-index-card-search.component.html',
  styleUrl: './input-select-index-card-search.component.css'
})
export class InputSelectIndexCardSearchComponent implements OnInit {
  @Input() iconClass: string = ''; // Ícone do botão
  @Input() inputSelectId: string = '';
  @Input() selectedText: string = 'Selecione a Carteira';
  @Output() selectionChange = new EventEmitter<string>(); // Emite evento ao selecionar uma opção

  listItems: { name: string }[] = [];
  form!: FormGroup;

  private apiUrl = 'http://vps40250.publiccloud.com.br:5010/api/get_grafico_rentabilidade';

  constructor(private http: HttpClient, private fb: FormBuilder) {}



  ngOnInit() {
    this.initForm();
    this.fetchOptions();
  }

  initForm() {
    this.form = this.fb.group({
      nome_carteira: ['ANR Strategy'], // Valor padrão
      data_inicial: [null], // Mantém nulo para ser preenchido depois
      data_final: [null]
    });
  }

  fetchOptions() {
    // Definição dos headers
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Construindo o body da requisição

    const body = {
      nome_carteira: this.form?.get('nome_carteira')?.value || 'ANR Strategy',
      data_inicial: this.form?.get('data_inicial')?.value || '',
      data_final: this.form?.get('data_final')?.value || ''
    };

    console.log('Enviando body:', body); // Depuração para verificar o payload antes da requisição

    this.http.post<any[]>(this.apiUrl, body, { headers }) // Enviando POST com o body correto
      .pipe(
        catchError(error => {
          console.error('Erro ao carregar as opções do select:', error);
          return of([]); // Retorna um array vazio para evitar erro no front-end
        })
      )
      .subscribe(data => {
        if (data.length > 0) {
          console.log('Dados carregados com sucesso:', data);
          this.listItems = data.map(item => ({ name: item.nome }));
        } else {
          console.warn('Nenhum dado recebido, usando valores padrões.');
          this.useDefaultOptions();
        }
      });
  }


  useDefaultOptions() {
    this.listItems = [
      { name: 'ANR Strategy' },
      { name: 'ANR Flex' },
      { name: 'ANR Prev Pro BR' },
      { name: 'ANR Prev Pro USA' }
    ];
  }

  onSelectionChangeMobile(event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(`Carteira selecionada: ${selectedValue}`);
    this.selectionChange.emit(selectedValue); // Emite a opção selecionada
  }
}
