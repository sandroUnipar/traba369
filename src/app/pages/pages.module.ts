import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CarsModule } from './cars/cars.module';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    CarsModule
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
