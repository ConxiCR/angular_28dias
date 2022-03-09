import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{

  cities = ['Barcelona', 'Madrid', 'Lima']
  name!: string;
  selection!: string;
  criteria!: '';

  title = 'angular_28Dias';
  url='https://unsplash.com/photos/_bHzC5CSyYY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
  
  addNewCity(city: string){
    this.cities.push(city);
  }
  onCityClicked(city: string): void{
    console.log('City->', city);
    this.selection = city;
  }
  onClear(): void{
    this.selection = '';
  }
}
