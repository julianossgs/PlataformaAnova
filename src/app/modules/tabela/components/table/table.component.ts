import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { CheckBoxComponent } from '../check-box/check-box.component';
import { ButtonComponent } from "../../../tabela/components/button/button.component";
import { CheckBoxTabelaComponent } from "../check-box-tabela/check-box-tabela.component";
import { FormsModule } from '@angular/forms';
import { ModalmenutabelaComponent } from '../modalmenutabela/modalmenutabela.component';
import { InputComponent } from "../../../login/components/input/input.component";


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,
    ButtonComponent,
    CheckBoxTabelaComponent,
    FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  users = [
    { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
      Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
      PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },

      { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
        Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
        PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },

        { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
          Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
          PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },

          { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
            Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
            PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },

            { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
              Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
              PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },

              { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
                Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
                PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },
                { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
                  Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
                  PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },
                  { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
                    Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
                    PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },
                    { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
                      Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
                      PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },
                      { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
                        Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
                        PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },
                        { ID: 59,Conta:'16880353', Nome: 'Gilberto Sonaglio Junior',
                          Carteira: 'ANR FLEX',Corretora:'XP',CPFCNPJ:'033.397.030-08',
                          PLInicial:'R$62.000,00',Dataderegistro:'30/10/2024',selected:false },

  ]

  // Variável para o checkbox "Selecionar todos"
  selectAll: boolean = false;

 // Função para controlar o "Selecionar todos"
 toggleSelectAll() {
  this.selectAll = !this.selectAll;
  this.users.forEach(user => user.selected = this.selectAll);
}

// Função para controlar o estado de cada checkbox individual
toggleSelection(user: any) {
  user.selected = !user.selected;
  this.selectAll = this.users.every(user => user.selected);
}

}
