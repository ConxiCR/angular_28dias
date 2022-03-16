import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { City, DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 // @ViewChild(NgModel) filterInput!: NgModel;
  //cities = ['Barcelona', 'Madrid', 'Lima']
  cities: City[] = []
  //name!: string;
  selection!: City;//string;
  criteria!: '';

  //title = 'angular_28Dias';
  //url='https://unsplash.com/photos/_bHzC5CSyYY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'
  
  constructor(private readonly dataSvc: DataService){}
  /*ngAfterViewInit(): void {
    this.filterInput.valueChanges?.subscribe(res => {
      console.log('res', res);
      this.filter(res);
    })
  }*/
  ngOnInit(): void {
    this.dataSvc.selectedCity$.subscribe(city=> this.selection = city)

    this.dataSvc.getCities()
      .subscribe(cities => {
        this.cities = [...cities];
      });
  }
  /*filter(query:string): void{
    console.log('query', query);
    
  }*/
  upDateCity(city: City):void{
    this.dataSvc.updateCity(city).subscribe(res => {
      const tempArray = this.cities.filter(item => item._id !== city._id);
      this.cities = [...tempArray, city];
      this.onClear();
    })
  }
  addNewCity(city: string):void {
    //this.cities.push(city);
    this.dataSvc.addNewCity(city)
      .subscribe(res=> {
        this.cities.push(res)});
  }
  onCitySelected(city: City): void{
    //console.log('City->', city);
    //this.selection = city;
    this.dataSvc.setCity(city);
  }
  onCityDelete(id: string): void{
    //console.log('id', id);
    if(confirm('Are you sure?')){
      this.dataSvc.deleteCity(id).subscribe(() => {
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
