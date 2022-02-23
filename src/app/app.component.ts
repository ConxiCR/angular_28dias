import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cities = ['Barcelona', 'Madrid', 'Lima']
  //propiedad. No la estoy definiendo, sólo declarando
  name? : string;


  title = 'angular_28Dias';
  url='https://unsplash.com/photos/_bHzC5CSyYY?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink'



}
