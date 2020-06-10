import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './corona/material/material.module';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './corona/navbar/navbar.component';
import { StatewiseComponent } from './corona/statewise/statewise.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { CountriesComponent } from './corona/countries/countries.component';
import { HomeComponent } from './corona/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { DistrictComponent } from './corona/district/district.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StatewiseComponent,
    CountriesComponent,
    HomeComponent,
    DistrictComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    ChartsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
