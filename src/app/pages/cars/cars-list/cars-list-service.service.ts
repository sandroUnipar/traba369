import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CarsListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { sku: "1", name: 'Gol', marca: 'Volkswagen', modelo: 'Hatch', ano: 2005 },
      { sku: "2", name: 'Up!', marca: 'Fiat', modelo: 'SUV', ano: 2017 },
      { sku: "3", name: 'Fusca', marca: 'Ferrari', modelo: 'Hatch', ano: 2020 },
      { sku: "4", name: 'Aircross', marca: 'Fiat', modelo: 'SUV', ano: 2003 },
      { sku: "5", name: 'C4 Cactus', marca: 'Citroen', modelo: 'Sedan', ano: 2019 },
      { sku: "6", name: 'Xsara', marca: 'Ford', modelo: 'Hatch', ano: 1995 },
      { sku: "7", name: 'Halux', marca: 'Chevrolet', modelo: 'SUV', ano: 2020 },
      { sku: "8", name: 'Mustang', marca: 'Ford', modelo: 'Coupe', ano: 1980 },
      { sku: "9", name: 'Mazerati', marca: 'Volkswagen', modelo: 'Hatch', ano: 2012 },
      { sku: "10", name: 'Polo', marca: 'Volkswagen', modelo: 'Hatch', ano: 2014 },
      { sku: "11", name: 'Jetta', marca: 'Volkswagen', modelo: 'Sedan', ano: 2010 },
      { sku: "12", name: 'T-Cross', marca: 'Volkswagen', modelo: 'SUV', ano: 2020 },
      { sku: "13", name: 'Taurus', marca: 'Ford', modelo: 'SUV', ano: 1986 },
      { sku: "14", name: 'Windstar', marca: 'Ford', modelo: 'Sedan', ano: 1995 },
      { sku: "15", name: 'F1000', marca: 'Ford', modelo: 'Minivan', ano: 1990 },
    ];
  }

  getColumns() {
    return {
      sku: {
        title: 'SKU',
        type: 'string',
        filter: true,
        width: '10%',
      },
      name: {
        title: 'Nome',
        type: 'string',
        filter: true,
        width: '15%',
      },
      marca: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '20%',
      },
      modelo: {
        title: 'Modelo',
        type: 'number',
        filter: true,
        width: '10%',
      },
      ano: {
        title: 'Ano',
        type: 'number',
        filter: true,
        width: '10%',
      },
    }
  };

}
