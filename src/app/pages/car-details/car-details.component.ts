import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsService } from '../../Services/cars.service';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carID: any;
  carObj: any = [];
  constructor(private eCarService: CarsService, private router: Router, private activatedRoute: ActivatedRoute, ) {

    //  finding id from path params.
    this.carID = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit() {

    //calling get carbyID method
    this.getCarbyID();
  }

  getCarbyID() {
    this.eCarService.getCarbyID(this.carID).subscribe(response => {
      // copy response into local obj.
      this.carObj = response;
    }, error => {
      console.log(error);
    });
  }
}

