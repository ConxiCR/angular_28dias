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

### RETO1O Decorador @Input 
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

### RETO11 Decorador @Output Angular
https://www.youtube.com/watch?v=pycu2vAmER4&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=11
El flujo de los datos es del hijo hasta el padre
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
### RETO12 Mecanismo de detección de cambio Angular (Change Detection)
https://www.youtube.com/watch?v=UTT90NU_a0A
https://angular.io/api/core/ChangeDetectorRef#usage-notes
https://angular.io/errors/NG0100
https://angular.io/api/core/ChangeDetectionStrategy

`Change detection:` mecanismo que tiene Angular para detectar cuando el modelo cambia renderizar la vista sobre esos cambios. Es el mecanismo que se encarga de tener actualizados los componentes de la web en todo momento.  Los cambios los producen los eventos del mouse, las llamadas http request, setInterval, setTimeOut. Hay dos estrategiass:
        `Default` el se encarga de actualizar cuando el modelo cambia para actualizar la vista y viceversa ya que es two ways.` CheckAlways`
        `OnPush`(bajo demanda) `CheckOnce`.
. Creamos un componente nuevo "cities"
. Para saber que esta ocurriendo cuando se trabaja con componentes hijos todo funciona en forma de árbol. El ChangeDetection:
        . En la pestaña de source en el inspector de código. Con ctrl + p buscamos el fichero vendor.js. Buscamos el método `tick()`. Es el encargado de determinar cuando Angular vuelve a repintar la vista. Encima del número de línea, botón derecho escogemos logpoint y escribimos 'Inside tick()' y veremos como actua Angular. Console y veremos dos `Inside tick` por los dos checks que hace Angular para verificar. Que sólo hace en modo desarrollo no en producción.
![image](https://user-images.githubusercontent.com/67627523/157274190-f7648d36-14c3-4c47-9a52-42f7f26ab874.png)

`form-new-item.component.ts` para renderizar. Y lo colocamos en cualquier parte del html. Lo replicamos en todos los componentes hijos.
1. Hay que imprimirlo: <p>Count: {{counterRender()}}</p>
2. Método: counterRender(): boolean{
    console.log('Render Form');
    return true;
  }
  cambiamos la estrategia. Nos encargamos de que determinados componentes cambien cuando las propiedades cambien, ya que no dependen de nada externo. Para eso utilizamos el onPush.
  changeDetection: ChangeDetectionStrategy.OnPush en todos los componentes con @Input @Output, ya que sólo dependen de la data que les introducimos por el input.
  
### RETO13 ¿Cómo crear un pipe personalizado en Angular?
https://www.youtube.com/watch?v=pAkG9KLrAxI&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=13
https://angular.io/guide/pipes

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
`Interface` https://www.youtube.com/watch?v=CmE3okASUJo

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

### RET014 Formularios template-driven form Angular - video1
https://www.youtube.com/watch?v=AYOQB6leTts&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=14
https://github.com/domini-code/reto-angular-formularios

Dos enfoques para trabajar con formularios: Template-drive forms y Reactives forms.
`Template-drive forms`(formulario de contactos sencillo, subscripcion de email, cosas sencillas sin campos anidados)
. Creamos carpeta contact
. Creamos formulario en .html
. Maquetación de Angular con formularios ngForm. https://angular.io/api/forms/NgForm
        Creación del `Template variable reference` https://angular.io/api/forms/NgForm#template-variable-references para tener acceso a las variables de esa Directiva. En `contact.component.ts`. En el app.module tenermos que importar los formularios
        <form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">
.¿Cómo asociamos nuestros campos? Enlace unidireccional es simple no tiene que cargar data(sólo se incorporaran datos por el usuario y enviarlos al APi) otra manera es cargar la data y enlazar con un model.
#### Viene predefinido en Angular. Es un pipe de json
<pre>{{contactForm | json}}</pre>
![image](https://user-images.githubusercontent.com/67627523/157274675-05ee17dd-1585-40e4-8728-f592c16e0f47.png)


`opción 1` - El usuario introduce data, almacenamos la data y la enviamos a la api. Una via de comunicación. Mediante el atributo "name".
https://angular.io/api/forms/NgForm

Se pueden pasar values o el contactForm
<form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">
`opcion 2` - si necesitamos cargar data en el formulario. Si necesitamos enviar data utilizamos el two-way data biding. `[(ngModel)]="model.name"` En lugar de utilizar directamente el ngModel utilizamos el banana on de box para hacer el two-way data binding. De esta manera enlazamos el html con el ts.


Para trabajar con formularios template driven hacen falta  3 cosas 
1) Darle nombre a nuestro formulario mediante template template reference  #myForm="ngForm" 
2) (ngSubmit)="onSubmitForm(myForm.value); 
3) cada campo del formulario debe de tener el atributo nombre y la directiva NgModel

. Validaciones
Se puede validar si se ha tocado un campo concreto, se haya introducido algún valor o sólo introduce el cursor y sale (onTouch). En el input #name="ngModel" en el <div [hidden]="name.valid || name.pristine" Sólo se muestra cuando el campo sea inválido o pristine cuando el usuario haya cambiado algo en la UI o se haya cambiado algo en la inteface.
EL botón de enviar lo desabilitamos para que sólo sea válido si todo esta validado. En el button [disabled]="contactForm.invalid". No podrá hacer envios.
También se puede validar el formulario desdel .ts en el submit. Tendriamos que recibir todo el formulario en lugar del valor.
                
                onSubmit(values: any): void {
                        console.log('Form values', values);
                } sólo valor
                 onSubmit(values: any): void {
                        console.log('Form values', values);
                } con el form
      ![image](https://user-images.githubusercontent.com/67627523/157274933-46688c71-e5f1-48b6-bc94-d0af406add1a.png) La propiedad `value` nos da los valores introducidos en el formulario
      ![image](https://user-images.githubusercontent.com/67627523/157275411-bebd0aae-c20e-4fa5-8306-46b9f5f9c8f5.png) La propiedad `valid` se puede comprovar si es igual a true seguimos sino no hacemos nada

### RETO14 Formularios template-driven form Angular - video2
https://www.youtube.com/watch?v=epSVNMtG80I&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=15
https://github.com/domini-code/reto-angular-formulariosSs&t=0s

`Formularios Reactivos`https://www.youtube.com/watch?v=jJuE7-9T6Ss&t=0s
Todo parte de una clase `ABSTRACTCONTROL` que tiene varias subcontrol `FormControl`con un input, `FormGroup`y el `FormArray`.
`Reactives Forms Directives`(FormGroup, FormControl, FormControlNative, FormGroupName y FormArray)
. Creamos un nuevo componente `contact-reactive`
. Ponemos el componente en el app.component.html <app-contact-reactive></app-contact-reactive>
. Importamos el modulo de formularios reactivos al app.module.ts `ReactiveFormsModule`
. Copiamos el formulario de contact a contact-reactive. Se pueden combinar los dos tipos de formularios.
. No necesitamos en ngModel ni la referencia para la validación.
. Utilizamos la directiva formControlName="name"
. Como gestionamos el formulario con el reactivo? En lugar de la variable de referencia utilizamos el [formGroup] + nombre del formulario.
. Creamos método y propiedad.
. `OPCIÓN ADICIONAL:` Cuando tenemos un sólo input podriamos trabajar con esta opción: trabajar con el FormControl. Podriamos ver cada vez que cambie el valor del input con un observable.
          ![image](https://user-images.githubusercontent.com/67627523/157436144-b75a42aa-7e36-476a-a783-c362b590ce19.png)

. Creamos un método para iniciar el formulario. Que va a devolver un FormGroup. Declararemos las propiedades del formulario con el FormBuilder(creador de formularios). Para poder utilizarlo tenemos que hacer la importación al constructor. Podremos escoger entre(array, control y un group). El group es un método que espera un objeto a donde definir los campos.
Los campos estan formados por el nombre del campo y argumentos. El 1r argumento puede ser null, vacio o definido. EL segundo las diferentes validaciones simples o en [] para pasar más de una. Pueden ser más de una. Como lo vamos a devolver `return`.
        initForm(): FormGroup{
                return this.fb.group({
                        name: ['', [Validators.required, Validators.minLength(3)]], (mínimo de caracteres 3)
                        checkAdult: ['', [Validators.required]],
                        department: [''],
                        comment: ['', [Validators.required]],
                })
        }
. Igualamos la propiedad `contactForm` en el `ngOnInit` con resultado del método `initForm`. La propiedad tiene el modelo de datos.
. Aplicamos el contactForm en el html.
. Validaciones: 
        campo name - directiva `ngIf`. Accedemos al formulario mediante el `contactForm.get` y como string el nombre del campo comprobamos si ha sido tocado, pero también tiene que ser invalido. Propiedad `errors` que sólo existe si hay errores porque puede ser null. Tiene que ser requerido.
        <div *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.errors?.['required']" class="alert alert-danger">
        Otra validación es que sea tocada y que tenga más de 3 caracteres: `minlength tiene que ir en minusculas`
        <div *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.errors?.['minlength']" class="alert alert-danger">Name must be longer then 3 characters.</div>
        -> Se puede hacer de forma dinámica por si el metodo cambiara `Name must be longer than{{contactForm.get('name')?.errors?.['minlength']?.requiredLength}}characters.`

        Para indicarle data podemos utilizar el patchValue. p.e: 
                        onPathValue(): void {
                                this.contactForm.patchValue({ name: 'Hola'}); y declararlo en el ngOnInit
                        }
      ![image](https://user-images.githubusercontent.com/67627523/157476145-9378c62d-0c53-462d-8f0b-52bb4d02273c.png)

### RET15 Configuración de rutas en Angular
https://www.youtube.com/watch?v=kHDSrHXqe-Y&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=16
La ruta es:
* Encargada de la navegación de un componente a otro.
* Pasar parámetros 
* Redireccionar
* Proteger rutas (guards)

. Creamos un nuevo componente `home`
. Creamos las rutas en el modulo `app-routing.module.ts`
        const routes: Routes = [
                - creamos una ruta especifica para cuando vaya al host el usuario. Redirección de ruta. Propiedad `pathMatch `calcula que tanto tiene que coincidir con la ruta para cumplirse o no. Angular evalua de arriba a abajo las rutas. Si no cumple la primera va a la siguiente y consecutivamente
                {path: '', redirectTo: '/home', pathMatch: 'full'},
                {path: 'contact-reactive', component: ContactReactiveComponent},
                {path: 'contact-template', component: ContactComponent},
                {path: 'home', component: HomeComponent},
        ];
. Llevar la directiva <router-outlet></router-outler> al componente principal.
. El html del app.component.html llevarlo al `home.component.html`
. Necesitamos enlaces para navegar más facil no tener que introducir las rutas desde la barra de direcciones.
. Creamos un componente navbar y le indicamos que lo coloque en el app.module.ts `ng g c navbar -m app`
Lo vamos a llamar desdel app.component.html
. Incorporamos estilo bootstrap para el navbar https://getbootstrap.com/docs/5.1/components/navbar/
Maquetamos el html indicando las rutas creadas. Para que nos lleve a las páginas indicadas.
         <a class="nav-link" href="/contact-reactive">Reactivo</a>
. Para que no recargue las páginas una y otra vez y la convierta en una `single-page` utilizamos el `routerLink` en lugar del href.
. Clase `active` de bootstrap. Cuando esta en una ruta determinada cambia un poco los estilos. Cambiamos background para que se vea la diferencia.
. Para saber que estamos en una determinada ruta  Angular tiene una clase `routerLinkActive` que es parte de la directiva `routerLink`. Sirve para indicarle que señale cuando la ruta este activa.
. Para que no tenga varias opciones activas se puede hacer de dos formas:
        1. [routerLinkActiveOptions]="{exact: true}" en la ruta home
        <a class="nav-link active" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" routerLink="/home">Home</a>
        2. En la ruta vacia indicarle /home.






















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
