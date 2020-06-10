import { StateDistrictService } from './../../shared/state-district.service';
import { CoronaService } from './../../shared/corona.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {

  constructor(public cService :CoronaService ,
              public sService : StateDistrictService) { }
district: any;
stateName ;
distName;
array : any;
arraywithState: any;
districtName ;
searchString;
finalArrayActive : any;
finalArrayConfirmed : any;
finalArrayDeceased : any;
finalArrayRecovered : any;
finalArrayDeltaConfirmed : any;
finalArrayDeltaDaeceased : any;
finalArrayDeltaRecovered : any;



state= ['Gujarat' , 'Rajasthan'];
  ngOnInit(): void {
    this.cService.getDistrictWise().subscribe((data) => {
      this.district = data;
      this.array = this.district;
      console.log(data.Rajasthan);

      // this.district = data;
//       const searchString = this.stateName+ '.districtData.' + this.distName;
// const district = data;
//       // console.log(data.Rajasthan.districtData.Sirohi);
// console.log(searchString);
//       console.log(data.Gujarat.districtData.Ahmedabad);


    });



  }

public onOptionsSelected(event) {
  const value = event.target.value;
  const value2 = 'districtData';
  console.log(this.array[value]);
  this.arraywithState = this.array[value][value2];
  this.districtName= this.sService.getDistrict(value)
  console.log(this.arraywithState);



}
public onOptionsSelecteddistrict(event) {
  const value = event.target.value;
const active = 'active';
const confirmed = 'confirmed';
const deceased = 'deceased';
const recovered = 'recovered';
const delta = 'delta';
console.log(this.arraywithState[value]);
this.finalArrayActive = this.arraywithState[value][active];
this.finalArrayConfirmed= this.arraywithState[value][confirmed];
this.finalArrayDeceased = this.arraywithState[value][deceased];
this.finalArrayRecovered = this.arraywithState[value][recovered];
this.finalArrayDeltaConfirmed = this.arraywithState[value][delta][confirmed];
this.finalArrayDeltaDaeceased = this.arraywithState[value][delta][deceased];
this.finalArrayDeltaRecovered = this.arraywithState[value][delta][recovered];



}

}
