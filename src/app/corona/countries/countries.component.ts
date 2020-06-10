import { CoronaService } from 'src/app/shared/corona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
countrywise: any;
title = 'Country Corona Case!';
searchText ;
  constructor( public cService: CoronaService) { }

  ngOnInit(): void {
    this.cService.getCountryWise().subscribe((data) => {
      this.countrywise = data.data ;
      console.log(this.countrywise);
     ;
    });
  }

}
