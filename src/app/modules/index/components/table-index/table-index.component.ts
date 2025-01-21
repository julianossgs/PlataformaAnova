import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonIndexTableComponent } from "../button-index-table/button-index-table.component";

@Component({
    selector: 'app-table-index',
    imports: [CommonModule, ButtonIndexTableComponent],
    templateUrl: './table-index.component.html',
    styleUrl: './table-index.component.css'
})
export class TableIndexComponent {
  users = [
    { Nome: 'Gilberto Sonaglio Junior',
       },

    {Nome: 'Silvio Henrique Pereira',
        },

    {Nome: 'Maria Silva Dias',
          },

    { Nome: 'Gilberto Sonaglio Junior',
        },

    {Nome: 'Gilberto Sonaglio Junior',
        },

    {Nome: 'Gilberto Sonaglio Junior',
       },
    {Nome: 'Carlos Roberto Novaes',
       },
    {Nome: 'Giovanne Carlos Pereira Nogueira',
       },

  ]
}
