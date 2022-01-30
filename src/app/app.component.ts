import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  barChartOptions = {
    type: 'bar',
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: false
    },
    hover: {
      mode: null
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    }
  };
  barChartLabels = ['2000', '2001', '2002', '2003', '2004', '2005'];
  barChartLegend = false;
  barChartData = [
    {
      data: [75, 49, 89, 31, 86, 35, 50],
      backgroundColor: [
        'red',
        'blue',
        'red',
        'red',
        'red',
        'red',
      ]
    },
  ];
}
