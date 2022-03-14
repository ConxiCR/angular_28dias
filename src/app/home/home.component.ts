import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //cities = ['Barcelona', 'Madrid', 'Lima']
  cities: City[] = []
  //name!: string;
  selection!: City;//string;
  criteria!: '';

  //title = 'angular_28Dias';
  //url='https://unsplash.com/photos/_bHzC5CSyYY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
  
  constructor(private readonly dataSVC: DataService){}
  ngOnInit(): void {
    this.dataSVC.getCities()
      .subscribe(cities => {
        this.cities = [...cities];
      });
  }
  upDateCity(city: City):void{
    this.dataSVC.updateCity(city).subscribe(res => {
      const tempArray = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArray, city];
      this.onClear();
    })
  }
  addNewCity(city: string):void {
    //this.cities.push(city);
    this.dataSVC.addNewCity(city)
      .subscribe(city=> {
        this.cities.push(city)});
  }
  onCitySelected(city: City): void{
    //console.log('City->', city);
    this.selection = city;
  }
  onCityDelete(id: string): void{
    //console.log('id', id);
    if(confirm('Are you sure?')){
      this.dataSVC.deleteCity(id).subscribe(() => {
        const tempArray = this.cities.filter(city => city._id !== id);
        this.cities = [...tempArray];
        this.onClear();
      });
    }

  }
  onClear(): void{
    //this.selection = '';
    this.selection = {
      _id: '',
      name: ''
    }
  }
}
