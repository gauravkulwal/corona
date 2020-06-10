import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule
  ]
})
export class MaterialModule { }
