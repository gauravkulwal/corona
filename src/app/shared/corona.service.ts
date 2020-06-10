import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(public http : HttpClient) { }
  getStateWise(): Observable<any>{
    const url = 'https://api.covid19india.org/data.json';
    return this.http.get<any>(url);
  }
  getCountryWise(): Observable<any>{
    const url = 'https://corona-api.com/countries';
    return this.http.get<any>(url);
  }

  getDistrictWise(): Observable<any>{
    const url = 'https://api.covid19india.org/state_district_wise.json';
    return this.http.get<any>(url);
  }
}
