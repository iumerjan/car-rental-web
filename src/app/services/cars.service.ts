import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
@Injectable()
export class CarsService {

  baseUrl = environment.baseURL + '/api/car/';
  constructor(private httpClient: HttpClient) { }

  getCars() {
   
    return this.httpClient.get(this.baseUrl);
  }

  private handleError(error: any) {

    const applicationError = error.headers.get('Application-Error');
    if (applicationError) {
      return Observable.throw(applicationError);
    }
    let modelStateErrors = '';
    try {
      const serverError = error.json();
      if (serverError) {

        modelStateErrors = serverError;
      }

    } catch (e) {
      modelStateErrors = 'Sorry, something went wrong.';
    }

    return Observable.throw(
      modelStateErrors || 'Server error'
    );

  }
}
