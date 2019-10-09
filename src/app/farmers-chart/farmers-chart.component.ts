import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {Chart} from 'chart.js'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-farmers-chart',
  templateUrl: './farmers-chart.component.html',
  styleUrls: ['./farmers-chart.component.scss']
})
export class FarmersChartComponent implements OnInit {
  @Input() dataPoints$: Subject<string>;
  @Input() chartName: string;
  @ViewChild('chart', { static: true }) private chartRef;
  chart: any;
  farmerName: string;
  datapoints: any = [0,0,0];
  constructor() { }

  ngOnInit() {
    this.dataPoints$.subscribe((data) => {
      const { name, dataPoints } = JSON.parse(data);
      this.datapoints = dataPoints;
      this.farmerName = name;
      this.createChart(this.datapoints);
    })
  }
  createChart(datapoints) {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Paid', 'Outstanding', 'Arrears',],
        datasets: [{
          label: '# of Votes',
          data: datapoints,
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',


          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
      }
    });
  }
}
