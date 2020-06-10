import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateDistrictService {
  district = [];
  state = []
  obj: any;
  constructor(private http: HttpClient ) {
this.getJson().subscribe((data) => {
var length1 = data.states.length;
var i =0;
this.obj= data;
while(i< length1){
  this.state.push(data.states[i].state);
  i++;

}


})
   }







getJson(): Observable<any>{
  return this.http.get<any>('../../assets/districtApi.json')
}
  getDistrict(state: string){
  var i =0;
  while(i < 35){
    if(this.obj.states[i].state === state){
      this.district = this.obj.states[i].districts;
    }
    i++;
  }
  console.log(this.district);
  return this.district;
  }

}
