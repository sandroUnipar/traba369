import { Component, OnInit } from '@angular/core';
import { CarsListTableService } from './cars-list-service.service';

@Component({
  selector: 'ngx-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent implements OnInit {

  constructor(public service: CarsListTableService) { }

  ngOnInit(): void {
  }

}
