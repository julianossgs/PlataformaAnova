import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ NgxEchartsDirective,provideEcharts} from 'ngx-echarts';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-grafhic-index',
  standalone: true,
  imports: [CommonModule,
    NgxEchartsDirective],
  templateUrl: './grafhic-index.component.html',
  styleUrl: './grafhic-index.component.css',
  providers:[
    provideEcharts(),
  ]
})
export class GrafhicIndexComponent {
   chartOption:EChartsOption = {

     xAxis:{
      type:'category',

      data:['MAR/23','MAIO/24','JUNHO/24','SET/24','NOV/24','JAN/25'],
      axisLabel:{
        rotate:0,
        interval:0
      }
     },
     yAxis:{
      type:'value'
     },
     series:[
      {
        name:'Vendas(%)',
        type:'line',
        data:[5,10,20,40,60,80],
        label:{
          show:true,
          position:'top',
          formatter:'{c}'

        }
      }
     ]


   }
}
