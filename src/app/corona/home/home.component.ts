import { Component, OnInit } from '@angular/core';
import {CoronaService} from './../../shared/corona.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public cService : CoronaService) { }


countrygraph: any;
countrydaycase: any;
countrydaylength : number;


public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
alength ;
A= [];
B =[];
C= [];
D = [];
public barChartLabels = [];
public barChartType = 'bar';
public barChartLegend = true;
// public barChartData = [
//   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
//   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
// ];
public barChartData = [
  {data: this.A, label: 'New Case'},
  {data: this.B, label: 'New Deaths'}
];


//2nd bar chart
public barChartLabels2 = [];
public barChartType2 = 'bar';
public barChartLegend2 = true;

public barChartData2 = [
  {data: this.C, label: 'Total Case'},
  {data: this.D, label: 'Total Deaths'}
];



  ngOnInit(): void {
    this.cService.getStateWise().subscribe((data) => {
      this.countrygraph = data ;

      this.countrydaylength = this.countrygraph.cases_time_series.length;
      this.alength = this.countrydaylength;
      console.log(this.countrygraph.cases_time_series);
      this.countrydaycase= this.countrygraph.cases_time_series[(this.countrydaylength-1)].dailyconfirmed;
      console.log(this.countrydaycase);
      console.log(this.alength);
      let j= this.countrygraph.cases_time_series.length;
      let i =(this.countrygraph.cases_time_series.length -7);
      while( i < j ){
        console.log(i);
        this.barChartLabels.push(this.countrygraph.cases_time_series[i].date);
        this.barChartLabels2.push(this.countrygraph.cases_time_series[i].date);
        this.A.push(this.countrygraph.cases_time_series[i].dailyconfirmed);
        this.B.push(this.countrygraph.cases_time_series[i].dailydeceased);
        this.C.push(this.countrygraph.cases_time_series[i].totalconfirmed);
        this.D.push(this.countrygraph.cases_time_series[i].totaldeceased);
        console.log(this.barChartLabels);
        console.log(this.A);

        i++;

      }

    });

  }



}
