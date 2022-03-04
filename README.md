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

### RETO8 Ciclo de vida componente Angular
https://www.youtube.com/watch?v=8lHdqC1GDGs&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=8

`Ciclo de Vida`
https://docs.google.com/presentation/d/1-XqwFA0ph5YTMwP9cjIqWSHR0BL04Xq1tw0Cmxcsk0U/edit#slide=id.g35f391192_00

Para utilizar los métodos, primero hemos de impletar la inteface en la clase. 
`OnChanges` - se ejecuta siempre y cuando hayan inputs & outputs.
`OnInit` sería el segundo o el primero si no hay OnChanges
`OnDestroyed`

![image](https://user-images.githubusercontent.com/67627523/155305960-faf8f915-c207-4d9e-80a9-81b2ae970854.png)

### RETO9 Event binding
https://www.youtube.com/watch?v=0qvQ_0A35b8&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=9
Escuchar y responder a las acciones como click, movimiento del mouse, pulsar teclas, etc.

    <ul *ngFor="let city of cities">
     <!--event biding-->
    <li (click)="onCityClicked(city)" [ngClass]= "{'selected': city === selection}">{{city}}</li>
    </ul>

    <div *ngIf="selection">
        <!--directiva ngIf para que cuando tenga algo se muestre sino no-->
        <p>Your city is: {{selection}}</p>
        <!--para limpiar la seleccion creamos un button-->
        <button (click)="onClear()">Clear your selection</button>
    </div>

### RET1O Decorador @Input 
https://www.youtube.com/watch?v=0JyLTgqGjYo&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=10

Un decorador se puede adjuntar a una clase metodo, propiedad. Modifica el comportamiento.
En un componente hijo la propiedad va a recibir un valor desde el padre

template: `<button>{{label}}</button>` => se puede hacer en el .html o utilizar el template del .ts

creamos un objeto changes que nos da el nuevo valor y el anterior.
dos properties color y label

        export class ButtonComponent implements OnInit, OnChanges, OnDestroy {
        @Input() color!: string;
        @Input() label!: string;
        @Input() selection!: string;

        constructor() { }
        ngOnChanges(changes:SimpleChanges): void{
        console.log('changes ->', changes);
        }
        ngOnInit(): void {
        console.log('OnInit');
        }
        ngOnDestroy(): void {
        console.log('OnDestroy');
        }
        }

![image](https://user-images.githubusercontent.com/67627523/156032460-ec1d9eba-32f7-4c07-a01a-f7cd4aee7a9d.png)
![image](https://user-images.githubusercontent.com/67627523/156032598-39c0b982-45a6-4cb0-8f58-ede216f2839b.png)

### RET11 Decorador @Output Angular
https://www.youtube.com/watch?v=pycu2vAmER4&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=11
Des del padre hasta el hijo
Añadimos bootstrap en el css.
Que necesitamos: decorador @output que nos permite comunicarnos desdel hijo. Nesitamos un input con un label y un botón de añadir para poder añadir ciudades de manera dinámica en lugar de la array de donde las cargamos ahora.
. Necesitamos un método addNewCity() que no va a devolver nada, pero va a recibir city's
. Creamos nuevo componente formulario. Y lo aplico en app.component.html
. Montamos el html del form
. Que necesito? Cuando introduzco algo en el input y haga click en add necesitamos añadir la información a un método template variable # + nombre(#itemNew):HtmlInputElement
. Creamos dos propiedades label y className.
. output para emitir la información del input hacia el padre. El método de guardar esta en el padre (addNewCity). Creamos un evento en el decorador output. En el método onAddNewItem, creamos el método emit de item. Para que nos escuche el padre indicamos en .html del padre llamamos al método del hijo. Al actualizar desaparece la información.
        `app.component.ts` padre
        addNewCity(city: string){
        this.cities.push(city);
        }
        `app.component.html` padre
        <app-form-new-item (newItemEvent)="addNewCity($event)" [label]="'City'" [className]="'btn-info'"></app-form-new-item>
        `form-new-item.component.ts`
        export class FormNewItemComponent {
                @Input() className = 'btn-primary';
                @Input() label?: string;
                @Output() newItemEvent = new EventEmitter;

                //método que no devuelve nada. Recibe item
                onAddNewItem(item: string){
                console.log('Item ->', item)
                this.newItemEvent.emit(item);
                }
        }
        `form-new-item.component.html`
        <form>
                <div class="row align-items-center">
                        <div class="col-auto">
                        <label for="newItem" class="col-form-label">New {{label}}</label>
                        </div>
                        <div class="col-auto">
                        <input type="text" id="newItem" class="form-control" #newItem>
                        </div>
                        <div class="col-auto">
                        <button (click)="onAddNewItem(newItem.value)" type="button" class="btn" [ngClass]="[className]">Add {{label}}</button>
                        </div>

                </div>
        </form>
### RET12 Mecanismo de detección de cambio Angular (Change Detection)
https://www.youtube.com/watch?v=UTT90NU_a0A
`Change detection:` mecanismo que tiene Angular para detectar cuando el modelo cambia renderizar la vista sobre esos cambios. Es el mecanismo que se encarga de tener actualizados los componentes de la web en todo momento.  Los cambios los producen los eventos del mouse, las llamadas http request, setInterval, setTimeOut. Hay dos estrategiass:
        `Default` el se encarga de actualizar cuando el modelo cambia para actualizar la vista y viceversa ya que es two ways.` CheckAlways`
        `OnPush`(bajo demanda) `CheckOnce`.
. Creamos un componente nuevo "cities"
`form-new-item.component.ts` para renderizar. Y lo colocamos en cualquier parte del html. Lo replicamos en todos los componentes hijos.
counterRender(): boolean{
    console.log('Render Form');
    return true;
  }
### RET13 ¿Cómo crear un pipe personalizado en Angular?

Pipe sirven para transformar data. Reciben un dato que pueden transformar. Angular tiene dos tipos de pipes, los que vienen por defecto y los custom pipes se adecuan a nuestras necesidades.
Pueden ser puros o impuros. Los `puros` vienen por defecto. Angular transforma la data y hasta que esa data no vuelve a cambiar Angular no vuelve a computar o realizar esa transformación. Los `impuros` se ejecuta el ciclo de detección de cambios Angular volvera a transformar la data aunque la data no haya cambiado.

Los `pipes por defecto que tiene Angular` hay una lista y se pueden combinar varios pipes.
        <p>{{'6/15/15, 9:03 AM' | date:'full'}}</p>
        <p>My birthday is: {{'6/15/15, 9:03 AM' | date:'full' | uppercase}}</p>
        <p>{{'999' | currency}}</p>
        <p>{{'999' | currency: 'EUR'}}</p>
        <p>{{'999' | currency: 'DOP'}}</p>
Mirar ISO 4217 donde hay todos los códigos para la transformación de monedas.

`pipes customizados`
. Creamos un pipe, bien automáticamente(ng g pipe (carpeta)) o manualmente.
Pipe es una clase que debe implementar una interface y nos indican que método necesitamos.
El decorador @pipe nos sirve para modificar el comportamiento de una clase. 
Si lo hacemos manual hemos de importarlo en app.module.ts
`filter.pipe.ts`
export class FilterPipe implements PipeTransform{
    //vamos a recibir una array de valores para recibir las ciudades y un argumento. Se van a recorrer todas las ciudades
    //para aplicar un filtro
    //indexOf busca dentro de un substring dentro del argumento si encuentra algo devuelve la posición sino -1
    //dara un resultado mas el valor que tengamos en ese momento
    transform(values: string[], arg: string): string[] {
        //devolveremos los valores que recibimos si el argumento si es bacio o null se devuelve 
        //o empiece a buscar si el argumento tiene más de 3 caracteres
        if(!arg || arg?.length < 3) return values;
        let result:string[] = [];
        for(const value of values){
            //igualamos lo que introduce el usuario introduce en el input como los elementos del array sea de minúscula a minúscula
            if(value.toLowerCase().indexOf(arg.toLowerCase()) > -1){
                result = [...result, value]
            }
        }
        return result;
    }
}

 
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
