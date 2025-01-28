import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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
import { NavbarMainComponent } from "../../../main/navbar-main/navbar-main.component";
import { ButtonIndexComponent } from "../../components/button-index/button-index.component";
import { FooterMainComponent } from "../../../main/footer-main/footer-main.component";

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
    ButtonIndexComponent,
    
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

  // Opções do seu gráfico ECharts
  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      //consumindo uma API passar o endpoint aqui
      data: ['01/01/2025', '02/01/2025', '03/01/2025',
        '04/01/2025', '05/01/2025', '06/01/2025'],
      axisLabel: {
        rotate: 0,
        interval: 0
      }
    },
    yAxis: {
      type: 'value',
      splitNumber: 10, // Aumente ou diminua para controlar a distância entre as linhas
      axisLabel: {
        formatter: '{value}%' // Formata os rótulos, se necessário
      }
    },
    series: [
      {
        name: 'Vendas(%)',
        type: 'line',
        data: [5, 10, 20, 40, 60,80],
        label: {
          show: true,
          position: 'top',
          formatter: '{c}'
        }
      }
    ]
  };

  /**
   * Construtor que injeta PLATFORM_ID para verificar se estamos no browser ou servidor
   */
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // Verifica se estamos no browser
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

}
