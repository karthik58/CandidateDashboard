import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts'

@Component({
  selector: 'app-doughnutchart',
  templateUrl: "./doughnutchart.component.html",
  styles: [
  ]
})
export class DoughnutchartComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Seeds Po', 'BPO Web Scrap'];
  public doughnutChartData: MultiDataSet = [
    [50, 50],
  ];
  public doughnutChartOptions: any = {
    borderWidth: 2,
    maintainAspectRatio: true,
    cutoutPercentage: 75,
    plugins: {

      labels: [
        {
          render: 'label',
          position: 'outside',
          textMargin: 12,
          fontSize: 10,
          fontStyle: 'bold',

        },
        {
          render: 'percentage',
          position: 'outside',
          fontSize: 10,
          fontStyle: 'bold',
        }
      ]
    }
  };
  responsive: true;

  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLegend: boolean = false;

  constructor() { }



  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  ngOnInit(): void {
  }

}
