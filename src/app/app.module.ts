import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CarsComponent } from './pages/cars/cars.component';
import { CarsService } from './Services/cars.service';
import { HttpClientModule } from '@angular/common/http';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { DeleteCarComponent } from './pages/delete-car/delete-car.component';
import { BookCarComponent } from './pages/book-car/book-car.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    AddCarComponent,
    CarDetailsComponent,
    DeleteCarComponent,
    BookCarComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
