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
      this.cars = data;
    //  this.isData = data.length > 0;
    
    }, error => {
      console.log(error.message)
    });
  }

}
