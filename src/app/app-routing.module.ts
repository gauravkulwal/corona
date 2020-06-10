import { CountriesComponent } from './corona/countries/countries.component';
import { HomeComponent } from './corona/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatewiseComponent } from './corona/statewise/statewise.component';
import { DistrictComponent } from './corona/district/district.component';


const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'state' ,  component: StatewiseComponent},
  {path: 'country' , component: CountriesComponent},
  {path: 'district' , component: DistrictComponent},
  {path: '' , redirectTo:'home' , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
