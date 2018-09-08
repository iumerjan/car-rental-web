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
  page: number = 1;
  currentPage: any;
  totalPages: any;
  constructor(private eCarService: CarsService) { }

  ngOnInit() {
    // this.cars = [];
    this.getCars();
   
  }

  getCars() {
    this.eCarService.getCars(this.page).subscribe(response => {
      
      //map data in local array
      this.onCarsLoad(response["cars"]);
      // set current page for pagination.
      this.currentPage = response["current"];
      // set total pages for pagonation.
      this.totalPages = response["pages"];
      // increment page no for pagination.
      this.page++;
      // check data is available or not.
      this.isData = this.cars.length > 0;

    }, error => {
      console.log(error);
    });
  }

  onCarsLoad(result: any) {

    for (var looper = 0; looper < result.length; looper++) {
      this.cars.push({
        _id: result[looper]._id,
        brand: result[looper].brand,
        model: result[looper].model,
        car_number: result[looper].car_number,
        number_of_seats: result[looper].number_of_seats,
        rate: result[looper].rate,
        car_type: result[looper].car_type,
        color: result[looper].color
      });
    }
  }

}
