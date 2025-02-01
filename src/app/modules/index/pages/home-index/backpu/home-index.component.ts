import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

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
import { InputSelectIndexCardSearchComponent } from '../../components/input-select-index-card-search/input-select-index-card-search.component';
import { ButtonIndexCardSearchComponent } from '../../components/button-index-card-search/button-index-card-search.component';
@Component({
    selector: 'app-home-index',
    imports: [
    CommonModule,
    NgxEchartsDirective,
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
    InputSelectGraficIndexComponent,
    InputSelectIndexCardSearchComponent,
    ButtonIndexCardSearchComponent
],
    templateUrl: './home-index.component.html',
    styleUrls: ['./home-index.component.css'],
    providers: [
        provideEcharts()
    ]
})
export class HomeIndexComponent {
  isBrowser = false;
  form: FormGroup;
  chartOption: EChartsOption = {};
  private apiUrl = 'http://vps40250.publiccloud.com.br:5010/api/get_grafico_rentabilidade';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private fb: FormBuilder, private http: HttpClient) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.form = this.fb.group({
      nome_carteira: ['ANR Strategy'],
      data_inicial: [null],
      data_final: [null],
    });
  }

  ngOnInit(): void {
    this.carregarDadosGrafico();
  }

  carregarDadosGrafico(): void {
    const body = {
      nome_carteira: this.form.get('nome_carteira')?.value || 'ANR Strategy',
      data_inicial: this.form.get('data_inicial')?.value || '',
      data_final: this.form.get('data_final')?.value || '',
    };

    console.log('Enviando requisição para API:', body);

    this.http.post<any>(this.apiUrl, body, { responseType: 'json' })
      .subscribe(response => {
        console.log('Resposta da API:', response);

        if (!response || !response.dates || !response.nomeCarteira || !response.cdi || !response.ibov) {
          console.error('Erro: Resposta da API incompleta ou inválida.');
          return;
        }

        const carteiraData = response.nomeCarteira.map((value: any) => parseFloat(value.toFixed(2)));
        const cdiData = response.cdi.map((value: any) => parseFloat(value.toFixed(2)));
        const ibovData = response.ibov.map((value: any) => parseFloat(value.toFixed(2)));

         // Pegando o nome diretamente do body
         const carteiraNome = body.nome_carteira;

         // Encontrar mínimo e máximo real dos valores
         const minY = Math.min(...carteiraData, ...cdiData, ...ibovData);
         const maxY = Math.max(...carteiraData, ...cdiData, ...ibovData);

         // Aplicar margem para melhor visualização (10% extra no mínimo e máximo)
         const margin = (maxY - minY) * 0.1;
         const adjustedMinY = Math.max(0, minY - margin);
         const adjustedMaxY = maxY + margin;

         // Ajustar quantidade de divisões baseado no tamanho da tela
         const isMobile = window.innerWidth < 768;
         const splitNumber = isMobile ? 5 : 10;

        this.chartOption = {
          tooltip: {

            show: true, // Força o tooltip a aparecer
            trigger: 'axis',
            triggerOn: 'mousemove|click', // Agora funciona no hover (desktop) e clique (mobile)
            axisPointer: {
              type: 'line',
              label: {
                show: true, // Mostra os valores da linha vertical ao passar o mouse
                backgroundColor: '#6a7985'
              }
            },
            formatter: (params: any) => {
              let result = `<strong>${params[0].axisValue}</strong><br/>`;
              params.forEach((item: any) => {
                result += `${item.marker} ${item.seriesName}: <strong>${item.value.toFixed(1)}%</strong><br/>`;
              });
              return result;
            }
          },
          legend: {
            data: [carteiraNome, 'CDI', 'IBOV'],
            top: '5%',
            icon: 'rect',
            itemWidth: 15,
            itemHeight: 5,
            textStyle: { fontSize: isMobile ? 10 : 12 }
          },
          grid: {
            left: '10%',
            right: '10%',
            top: '20%',
            bottom: isMobile ? '15%' : '10%'
          },
          xAxis: {
            type: 'category',
            data: response.dates || [],
            axisLabel: {
              rotate: isMobile ? 45 : 0,
              fontSize: isMobile ? 10 : 12
            }
          },
          yAxis: {
            type: 'value',
            splitNumber: splitNumber,
            min: adjustedMinY,
            max: adjustedMaxY,
            axisLabel: {
              formatter: (value: number) => `${value.toFixed(1)}%`,
              fontSize: isMobile ? 10 : 12
            }
          },
          series: [
            { name: carteiraNome, type: 'line', data: carteiraData, smooth: true, showSymbol: true },
            { name: 'CDI', type: 'line', data: cdiData, smooth: true, showSymbol: true },
            { name: 'IBOV', type: 'line', data: ibovData, smooth: true, showSymbol: true }
          ]
        };

      }, error => {
        console.error('Erro ao carregar os dados do gráfico:', error);
      });
  }

  onFilter(response: any): void {
    console.log('Filtragem executada:', response);
  }

  onExport(response: any): void {
    console.log('Exportação realizada:', response);
  }

  //select do mobile/desktop
  onCarteiraChange(value: string | null): void {
    console.log('Carteira selecionada:', value);
    this.form.get('nome_carteira')?.setValue(value ?? '');
    this.carregarDadosGrafico();
  }

 // Quando o usuário escolher as datas
  onDateRangeSelected(range: { dataInicial: string, dataFinal: string }) {
  this.form.get('data_inicial')?.setValue(range.dataInicial);
  this.form.get('data_final')?.setValue(range.dataFinal);
  this.carregarDadosGrafico();
}

  //select do mobile
  // onCarteiraChangeMobile(value: string): void {
  //   console.log('Carteira selecionada:', value);
  //   this.form.get('nome_carteira')?.setValue(value);
  //   this.carregarDadosGrafico(); // Atualiza o gráfico com a nova carteira
  // }


  onSubmit(): void {
    this.carregarDadosGrafico();
  }
}
