import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
@Injectable()
export class CarsService {

  baseURL = environment.baseURL + '/api/car/';
  constructor(private httpClient: HttpClient) { }

  getCars() {

    return this.httpClient.get(this.baseURL);

  }



}
