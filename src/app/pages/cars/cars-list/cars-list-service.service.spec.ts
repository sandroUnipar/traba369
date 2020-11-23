import { TestBed } from '@angular/core/testing';
import { CarsListTableService } from './cars-list-service.service';


describe('CarsListServiceService', () => {
  let service: CarsListTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarsListTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
