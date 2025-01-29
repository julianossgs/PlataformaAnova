import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// ngx-echarts
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';

// Seus outros imports (ex.: Navbar, Footer, etc.)
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardIndexComponent } from '../../components/card-index/card-index.component';
import { TableIndexComponent } from '../../components/table-index/table-index.component';
import { CardIndexSearchComponent } from '../../components/card-index-search/card-index-search.component';
import { CardIndexHomeComponent } from '../../components/card-index-home/card-index-home.component';
import { GrafhicIndexComponent } from '../../components/grafhic-index/grafhic-index.component';
import { MenuLateralMainComponent } from '../../../main/menu-lateral-main/menu-lateral-main.component';
import { ButtonGraficIndexComponent } from '../../components/button-grafic-index/button-grafic-index.component';
import { InputSelectGraficIndexComponent } from '../../components/input-select-grafic-index/input-select-grafic-index.component';


@Component({
    selector: 'app-home-index',
    imports: [
    CommonModule,
    NgxEchartsDirective, // para usar a diretiva [echarts]
    // Seus componentes
    CardIndexComponent,
    TableIndexComponent,
    CardIndexSearchComponent,
    CardIndexHomeComponent,
    GrafhicIndexComponent,
    MenuLateralMainComponent,
    NavbarComponent,
    FormsModule,
    ReactiveFormsModule,
    InputSelectGraficIndexComponent,
    ButtonGraficIndexComponent,

],
    templateUrl: './home-index.component.html',
    // Use "styleUrls" (plural), não "styleUrl"
    styleUrls: ['./home-index.component.css'],
    providers: [
        // Fornece a biblioteca ECharts por meio do ngx-echarts
        provideEcharts({
        // Para SSR avançado, se desejar, pode adicionar lazy load aqui
        // Exemplo:
        // echarts: () => {
        //   if (typeof window === 'undefined') {
        //     // Se estiver no servidor, retorna fake
        //     return Promise.resolve({});
        //   } else {
        //     return import('echarts');
        //   }
        // }
        })
    ]
})
export class HomeIndexComponent {

  /**
   * Variável para indicar se estamos rodando no browser (true) ou no servidor (false).
   * Isso evita o erro 'window is not defined' no SSR.
   */
  isBrowser = false;

  form: FormGroup; // Declaração do formulário

  // Opções do seu gráfico ECharts
  chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['ANRProv BR', 'CDI', 'IBOV'], // 🔥 Adicionando as legendas dos índices
      top: '5%' // 🔥 Posicionando a legenda no topo
    },
    xAxis: {
      type: 'category',
      data: ['01/01/2025', '02/01/2025', '03/01/2025',
             '04/01/2025', '05/01/2025', '06/01/2025'],
      axisLabel: {
        rotate: 0,
        interval: 0
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 10,
      axisLabel: {
        formatter: '{value}%' // 🔥 Formata os valores do eixo Y como porcentagem
      }
    },
    series: [
      {
        name: 'ANRProv BR', // 🔥 Primeiro índice
        type: 'line',
        data: [5, 10, 20, 40, 60, 80], // 🔥 Valores do índice ANRProv BR
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        }
      },
      {
        name: 'CDI', // 🔥 Segundo índice
        type: 'line',
        data: [2, 5, 7, 10, 15, 18], // 🔥 Valores do CDI
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        }
      },
      {
        name: 'IBOV', // 🔥 Terceiro índice
        type: 'line',
        data: [8, 15, 25, 30, 50, 70], // 🔥 Valores do IBOV
        label: {
          show: true,
          position: 'top',
          formatter: '{c}%'
        }
      }
    ]
  };


  /**
   * Construtor que injeta PLATFORM_ID para verificar se estamos no browser ou servidor
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object,private fb: FormBuilder,private http: HttpClient) {
    // Verifica se estamos no browser
    this.isBrowser = isPlatformBrowser(this.platformId);

     // Inicializa o formulário
     this.form = this.fb.group({
      carteira: [''], // Select da Carteira
      dataFiltro: [''], // Botão "Filtrar por data"
    });
  }

  onFilter(response: any): void {
    console.log('Filtragem executada:', response);
  }

  onExport(response: any): void {
    console.log('Exportação realizada:', response);
  }

  onCarteiraChange(value: string): void {
    console.log('Carteira selecionada:', value);
    this.form.get('carteira')?.setValue(value);
  }

  // Função para processar os dados do formulário
  // onSubmit(): void {
  //   console.log('Formulário enviado:', this.form.value);
  // }

  onSubmit(): void {
    const formData = this.form.value;
    console.log('Enviando formulário:', formData);

    this.http.post('https://api.exemplo.com/enviar-formulario', formData).subscribe(response => {
      console.log('Formulário enviado com sucesso!', response);
    });
}
}
