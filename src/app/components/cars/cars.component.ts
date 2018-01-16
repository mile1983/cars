import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  private cars = [];

  constructor(private __carService : CarService) {
    this.cars = this.__carService.getCars();
   }

  ngOnInit() {
  }

}
