# Angular28Dias

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.
#### Development server

Run `ng serve or npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. We can see the application in local.

### RETO1 - Crear proyecto
(https://www.youtube.com/watch?v=8Fwwhjt3jjE&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=1)
ng new nombreProyecto
### RETO2 - Estructura carpetas
(https://www.youtube.com/watch?v=UW09Ky62fzo&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=2)
### RETO3 - Components
(https://www.youtube.com/watch?v=MX4iPpFVsRc&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=3)
ng g c nombreComponent(ng generate component)
redenrización - reutilización del código
decorador `@Component` - transforma o convierte una clase
creación del button. En html <app-button></app-button> La información viene del .ts
### RETO4 - Interpolación && one way data binding
(https://www.youtube.com/watch?v=qjuYVJPb_Qg&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=4)
Nos permite escribir una cadena de texto entre elementos de html. 

        `<!--interpolacion en elementos html-->
        <p>{{ title }} con Angular</p>
        <!--interpolacion en calculos matematicos. One way, no se puede modificar-->
        <p>Total: {{ 5+5 }}</p>`
        
        También se puede utilizar en los atributos.
        <!--interpolacion en atributos-->
        <img src="{{ url }}" alt="">
### RETO5 - Enlace de datos bidireccional && two-way data binding
(https://www.youtube.com/watch?v=EuFh5s5lYIU&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=5)
Enlazar una propiedad que esta en .ts imprimirla o tenerla en html y modificar su valor simultaneamente
`[(ngModel)]` (banana on the box) - importaremos el módulo del formulario. Crea una instancia del formControl para enlazar el modelo del form al input. Injectamos en appmodule el FormsModule. Pasos:

        1. creamos la propiedad en .ts
        2. creamos el input en .html
        3. importamos el módulo FormsModule en .module
        
        <p>El nombr es: {{ name }}</p>
        <input type="text" [(ngModel)]="name">
        
![two-way data biding](https://user-images.githubusercontent.com/67627523/155089318-cb3713d6-cf2f-4059-8460-0569658d2702.png)
### RETO6 - ¿Qué es una directiva? ngIf, ngFor
(https://www.youtube.com/watch?v=ZUX_K4jR-9Q&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=6)
Directivas, atributos que pueden cambiar la apariencia o el comportamiento del DOM element.
Hay 4 tipos: 
       . estructurales(pueden modificar elementos del DOM)
       . De atributos
       . Customs
       . componentes(directivas con template).
Directivas estructurales `ngIf` `nFor`
### RETO7 - ¿Qué son las directivas de atributos? ngClass, ngStyle
(https://www.youtube.com/watch?v=9ZExEHDREeQ&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=7)
`ngClass` permite de manera dinámica añadir o eleminar una clase de un elemento
<ul *ngFor="let city of cities">
   <!--<li {{city}}</li>-->
    <!--pasamos un string. Clase-->
    <li [ngClass]= "'selected blue'">{{city}}</li>
    <!--pasamos un array de strings. Siempre es mas facil añadir clases-->
    <li [ngClass]= "['selected', 'blue']">{{city}}</li>
    <!--pasamos un objeto. Si la condición se cumple se aplica la clase-->
    <li [ngClass]= "{'selected': city === 'Barcelona', 'blue': city != 'Barcelona'}">{{city}}</li>
</ul>

`ngStyle` para cuando se necesite aplicar estilo directamente en el html sin scss
<ul *ngFor="let city of cities">
   <li [ngStyle]= "{'color': 'white', 'background-color': city === 'Madrid' ? 'blue' : 'green'}">{{city}}</li>
</ul>


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# angular_28dias
