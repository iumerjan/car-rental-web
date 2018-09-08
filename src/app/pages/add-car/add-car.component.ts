import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../Services/cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  addCarModel: any = {};
  isProcessing: boolean = false;
  isCompleted: boolean = false;
  constructor(private eCarService: CarsService) { }

  ngOnInit() {
  }

  registerCar() {
    this.isProcessing = true;
    this.eCarService.registerCar(this.addCarModel).subscribe(data => {
      this.isProcessing = false;
      this.isCompleted = true;
    }, error => {
      this.isProcessing = false;
      console.log(error.message)
    });
  }

}

