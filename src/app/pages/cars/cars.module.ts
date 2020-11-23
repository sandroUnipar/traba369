import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';
import { CarsRoutingModule } from './cars-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';
import { CarsComponent } from './cars.component';

@NgModule({
  declarations: [
    CarsComponent,
    CarsListComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    Ng2SmartTableModule,
    NbCardModule
  ]
})
export class CarsModule { }
