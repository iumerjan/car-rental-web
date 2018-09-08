import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../Services/cars.service';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars: any = [];
  isData: boolean = false;
  constructor(private eCarService: CarsService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.eCarService.getCars().subscribe(data => {
        // copy response into local obj.
      this.cars = data;
      // check data is available or not.
      this.isData = this.cars.length > 0;

    }, error => {
      console.log(error);
    });
  }

}
