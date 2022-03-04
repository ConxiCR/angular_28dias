import { Component, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  

  cities = ['Barcelona', 'Madrid', 'Lima']
  //propiedad. No la estoy definiendo, sólo declarando
  name!: string;
  selection!: string;
  criteria!: '';

  title = 'angular_28Dias';
  url='https://unsplash.com/photos/_bHzC5CSyYY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'

//traerá los cambios anteriores y los nuevos
/*ngOnChanges(changes: SimpleChanges): void {
  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
    console.log('Change =>', changes);
}
//método que se ejecuta primero para hacer una petición a la API llamamos a un servicio para obtener una data que queremos renderizar
ngOnInit(): void {
    console.log('OnInit => ');
}
//desuscripciones de los observables. También podemos ver cuando el usuario va a abandonar un determinado componente
ngOnDestroy(): void {
    console.log('Destroy');
}*/
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
