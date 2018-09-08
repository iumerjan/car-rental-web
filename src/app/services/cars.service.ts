import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
@Injectable()
export class CarsService {

  baseUrl = environment.baseURL + '/api/car/';
  constructor(private httpClient: HttpClient) { }

  // fetch all cars service
  getCars() {

    return this.httpClient.get(this.baseUrl);
  }

  // add car service
  registerCar(model: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post(this.baseUrl, model, httpOptions);
  }

  // fetch car by ID service
  getCarbyID(id: any) {

    return this.httpClient.get(this.baseUrl + id);
  }

}
