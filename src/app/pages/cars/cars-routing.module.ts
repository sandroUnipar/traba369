import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsListComponent } from './cars-list/cars-list-service.service.spec-list.component';
import { CarsComponent } from './cars.component';

const routes: Routes = [
  {
    path: '',
    component: CarsComponent,
    children: [
      {
        path: 'cars-list',
        component: CarsListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class CarsRoutingModule {
}