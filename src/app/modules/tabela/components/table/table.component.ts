import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CheckBoxTabelaComponent } from '../check-box-tabela/check-box-tabela.component';
import { ButtonComponent } from '../../../tabela/components/button/button.component';
import { CpfCnpjPipe } from '../../../../_pipes/cpf-cnpj.pipe';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule,
        ButtonComponent,
        CpfCnpjPipe],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  users: any[] = []; // Dados completos
  filteredUsers: any[] = []; // Dados filtrados exibidos na tabela
  selectAll: boolean = false;

  // Objeto de filtros
  filters = {
    id: '',
    conta: '',
    nome: '',
    carteira: '',
    corretora: '',
    cpf: '',
    pl: '',
    dataRegistro: ''
  };

  private apiUrl = 'http://vps40250.publiccloud.com.br:5010/api/get_clientes_cadastrados';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadClientes(); // Carrega os dados ao inicializar o componente
  }

  // Carrega os dados da API
  loadClientes(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.users = data.map((cliente) => ({
          ID: cliente.id_cliente,
          Conta: cliente.conta,
          Nome: cliente.nome_completo,
          Carteira: cliente.carteira,
          Corretora: cliente.corretora,
          CPFCNPJ: cliente.cpf,
          PLInicial: `R$ ${cliente.pl_inicial.toLocaleString('pt-BR')}`,
          Dataderegistro: new Date(cliente.data_registro).toLocaleDateString('pt-BR'),
          ContratoEnviado: cliente.contrato_enviado,
          ContratoAssinado: cliente.contrato_assinado,
          selected: false
        }));
        this.filteredUsers = [...this.users]; // Inicializa os dados filtrados
      },
      error: (err) => {
        console.error('Erro ao carregar dados da API:', err);
      }
    });
  }

  // Aplica os filtros
  applyFilters(): void {
    this.filteredUsers = this.users.filter((user) => {
      return (
        (!this.filters.id || user.ID.toString().includes(this.filters.id)) &&
        (!this.filters.conta || user.Conta.toLowerCase().includes(this.filters.conta.toLowerCase())) &&
        (!this.filters.nome || user.Nome.toLowerCase().includes(this.filters.nome.toLowerCase())) &&
        (!this.filters.carteira || user.Carteira.toLowerCase().includes(this.filters.carteira.toLowerCase())) &&
        (!this.filters.corretora || user.Corretora.toLowerCase().includes(this.filters.corretora.toLowerCase())) &&
        (!this.filters.cpf || user.CPFCNPJ.includes(this.filters.cpf)) &&
        (!this.filters.pl || user.PLInicial.includes(this.filters.pl)) &&
        (!this.filters.dataRegistro || user.Dataderegistro.includes(this.filters.dataRegistro))
      );
    });
  }

  // Função para "Selecionar todos"
  // toggleSelectAll(): void {
  //   this.selectAll = !this.selectAll;
  //   this.users.forEach((user) => (user.selected = this.selectAll));
  // }

  // Função para selecionar/desmarcar um usuário
  // toggleSelection(user: any): void {
  //   user.selected = !user.selected;
  //   this.selectAll = this.users.every((user) => user.selected);
  // }
}

