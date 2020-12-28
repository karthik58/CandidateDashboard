import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barchart',
  templateUrl: "./barchart.component.html",
  styles: [
  ]
})
export class BarchartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    plugins: {
      labels: {
        render: 'value',
      }
    },
    scales: {
      xAxes: [{
        barPercentage: 0.5,
        // barThickness: 5,
        categoryPercentage: 0.8

      }],
    }
  };

  public mbarChartLabels: string[] = ['Seeds PO', 'BPO Web Scrap', 'XE Web Scrap'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;

  public barChartColors: Array<any> = [
    {
      backgroundColor: 'rgba(1, 140, 195, 1)',
      borderColor: 'rgba(1, 140, 195, 1)',
      pointBackgroundColor: 'rgba(1, 140, 195, 1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(1, 140, 195)'
    },
    {
      backgroundColor: 'rgba(0, 128, 0, 1)',
      borderColor: 'rgba(0, 128, 0, 1)',
      pointBackgroundColor: 'rgba(0, 128, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 128, 0, 1)'
    },
    {
      backgroundColor: 'rgba(255, 0, 0, 1)',
      borderColor: 'rgba(255, 0, 0, 1)',
      pointBackgroundColor: 'rgba(255, 0, 0, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255, 0, 0, 1)'
    }
  ];

  public barChartData: any[] = [
    { data: [15, 18, 2], label: 'In Progress' },
    { data: [25.5, 16, 10], label: 'Passed' },
    { data: [12, 10, 1], label: 'Failed' },

  ];

  constructor() { }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    alert("kkkk")
    let data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100),
      (Math.random() * 100),
      Math.round(Math.random() * 100)];
    this.barChartData[0].data = data;
    // let clone = JSON.parse(JSON.stringify(this.barChartData));
    // clone[0].data = data;
    // this.barChartData = clone;
    console.log(this.barChartData)
  }

  ngOnInit(): void {
  }

}
