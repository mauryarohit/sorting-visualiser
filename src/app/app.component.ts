import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  barChartLabels = [];
  barChartLegend = false;
  barChartData: any;

  defaultBarSize = 15;

  ngOnInit(): void {
    this.resizeChart({ currentTarget: { value: this.defaultBarSize } });
  }

  resizeChart(event: any) {
    const size = event.currentTarget.value;
    const array = [], backgroundColor = [], borderColor = [];
    for (let i = 1; i <= size; i++) {
      array.push(Math.ceil(Math.random() * 10 + 1));
      backgroundColor.push('cyan');
      borderColor.push('red');
    }
    this.barChartData = [
      {
        data: [...array],
        backgroundColor: [...backgroundColor],
        barThickness: window.innerWidth / (array.length * 2),
        // borderColor: [...borderColor],
        // borderWidth: 3,
        barPercentage: 0.5,
      },
    ];
    this.barChartLabels = this.barChartData[0].data;
  }
}
