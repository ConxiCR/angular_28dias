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

        `<!--interpolación en elementos html-->
        <p>{{ title }} con Angular</p>
        <!--interpolación en cálculos matemáticos. One way, no se puede modificar-->
        <p>Total: {{ 5+5 }}</p>`
        
También se puede utilizar en los atributos.

        <!--interpolación en atributos-->
        <img src="{{ url }}" alt="">
        
### RETO5 - Enlace de datos bidireccional && two-way data binding
(https://www.youtube.com/watch?v=EuFh5s5lYIU&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=5)

Enlazar una propiedad que está en .ts imprimirla o tenerla en html y modificar su valor simultáneamente
`[(ngModel)]` (banana on the box) - importaremos el módulo del formulario. Crea una instancia del formControl para enlazar el modelo del form al input. Inyectamos en appmodule el FormsModule.

Pasos:

        1. creamos la propiedad en .ts
        2. creamos el input en .html
        3. importamos el módulo FormsModule en .module
        
        <p>El nombre es: {{ name }}</p>
        <input type="text" [(ngModel)]="name">
        
![two-way data biding](https://user-images.githubusercontent.com/67627523/155089318-cb3713d6-cf2f-4059-8460-0569658d2702.png)

### RETO6 - ¿Qué es una directiva? ngIf, ngFor
(https://www.youtube.com/watch?v=ZUX_K4jR-9Q&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=6)

Directivas, atributos que pueden cambiar la apariencia o el comportamiento del DOM element.

Hay 4 tipos: 

       . estructurales (pueden modificar elementos del DOM)
       . De atributos
       . Customs
       . componentes (directivas con template).
       
Directivas estructurales `ngIf` `nFor`
### RETO7 - ¿Qué son las directivas de atributos? ngClass, ngStyle
(https://www.youtube.com/watch?v=9ZExEHDREeQ&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=7)

`ngClass` permite de manera dinámica añadir o eliminar una clase de un elemento

        <ul *ngFor="let city of cities">
           <!--<li {{city}}</li>-->
            <!--pasamos un string. Clase-->
            <li [ngClass]= "'selected blue'">{{city}}</li>
            <!--pasamos un array de strings. Siempre es más fácil añadir clases-->
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

Para utilizar los métodos, primero hemos de implementar la interface en la clase. 

`OnChanges` - se ejecuta siempre y cuando haya inputs & outputs.
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
        <!--para limpiar la selección creamos un button-->
        <button (click)="onClear()">Clear your selection</button>
    </div>

### RETO1O Decorador @Input 
https://www.youtube.com/watch?v=0JyLTgqGjYo&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=10

Un decorador se puede adjuntar a una clase método, propiedad. Modifica el comportamiento.

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

- El flujo de los datos es del hijo hasta el padre

- Añadimos bootstrap en el css.

Que necesitamos: 

- decorador `@output` que nos permite comunicarnos des del hijo. 

- Un input con un `label` y un `button` de añadir para poder añadir ciudades de manera dinámica en lugar de la array de donde las cargamos ahora.

- Necesitamos un método addNewCity() que no va a devolver nada, pero va a recibir city's
- Creamos nuevo componente formulario. Y lo aplico en app.component.html
- Montamos el html del form
- ¿Que necesito? Cuando introduzco algo en el input y haga clic en add necesitamos añadir la información a un método template variable # + nombre(#itemNew):HtmlInputElement
- Creamos dos propiedades label y className.
- output para emitir la información del input hacia el padre. El método de guardar esta en el padre (addNewCity). Creamos un evento en el decorador output. En el método onAddNewItem, creamos el método emit de item. 
- Para que nos escuche el padre indicamos en .html del padre llamamos al método del hijo. Al actualizar desaparece la información.

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

`Change detection:` mecanismo que tiene Angular para detectar cuando el modelo cambia renderizar la vista sobre esos cambios. Es el mecanismo que se encarga de tener actualizados los componentes de la web en todo momento.  Los cambios los producen los eventos del mouse, las llamadas http request, setInterval, setTimeOut. Hay dos estrategias:

        `Default` se encarga de actualizar cuando el modelo cambia para actualizar la vista y viceversa ya que es two ways.` CheckAlways`
        `OnPush` (bajo demanda) `CheckOnce`.
        
- Creamos un componente nuevo "cities"
- Para saber que está ocurriendo cuando se trabaja con componentes hijos todo funciona en forma de árbol. El ChangeDetection:
- En la pestaña de source en el inspector de código. Con ctrl + p buscamos el fichero vendor.js. Buscamos el método `tick()`. 
Es el encargado de determinar cuándo Angular vuelve a repintar la vista. Encima del número de línea, botón derecho escogemos logpoint y escribimos 'Inside tick()' y veremos cómo actúa Angular. Console y veremos dos `Inside tick` por los dos checks que hace Angular para verificar. Que sólo hace en modo desarrollo no en producción.

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

Pueden ser puros o impuros. 

Los `puros` vienen por defecto. Angular transforma la data y hasta que esa data no vuelve a cambiar Angular no vuelve a computar o realizar esa transformación. 

Los `impuros` se ejecuta el ciclo de detección de cambios Angular volverá a transformar la data aunque la data no haya cambiado.

Los `pipes por defecto que tiene Angular` hay una lista y se pueden combinar varios pipes.

                    <p>{{'6/15/15, 9:03 AM' | date:'full'}}</p>
                    <p>My birthday is: {{'6/15/15, 9:03 AM' | date:'full' | uppercase}}</p>
                    <p>{{'999' | currency}}</p>
                    <p>{{'999' | currency: 'EUR'}}</p>
                    <p>{{'999' | currency: 'DOP'}}</p>
                    
Mirar ISO 4217 donde hay todos los códigos para la transformación de monedas.

`pipes customizados`

Creamos un pipe, bien automáticamente (ng g pipe (carpeta)) o manualmente.

Pipe es una clase que debe implementar una interface y nos indican que método necesitamos.

El decorador @pipe nos sirve para modificar el comportamiento de una clase.

Si lo hacemos manual hemos de importarlo en app.module.ts

`Interface` https://www.youtube.com/watch?v=CmE3okASUJo

`filter.pipe.ts`

export class FilterPipe implements PipeTransform{

    //vamos a recibir una array de valores para recibir las ciudades y un argumento. Se van a recorrer todas las ciudades
    //para aplicar un filtro
    //indexOf busca dentro de un substring dentro del argumento si encuentra algo devuelve la posición sino -1
    //dará un resultado más el valor que tengamos en ese momento
    
    transform(values: string[], arg: string): string[] {
        //devolveremos los valores que recibimos si el argumento si es vacío o null se devuelve 
        //o empiece a buscar si el argumento tiene más de 3 caracteres
        if(!arg || arg?.length < 3) return values;
        let result:string[] = [];
        for (const value of values){
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

`Template-drive forms`(formulario de contactos sencillo, suscripción de email, cosas sencillas sin campos anidados)

* Creamos carpeta contact
* Creamos formulario en .html
* Maquetación de Angular con formularios ngForm. https://angular.io/api/forms/NgForm
* Creación del `Template variable reference` https://angular.io/api/forms/NgForm#template-variable-references para tener acceso a las variables de esa              Directiva. En `contact.component.ts`. En el app.module tenemos que importar los formularios

          <form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">
          
¿Cómo asociamos nuestros campos? Enlace unidireccional es simple no tiene que cargar data(sólo se incorporaran datos por el usuario y enviarlos al APi) otra manera      es cargar la data y enlazar con un model.

>Viene predefinido en Angular. Es un pipe de json

<pre>{{contactForm | json}}</pre>

![image](https://user-images.githubusercontent.com/67627523/157274675-05ee17dd-1585-40e4-8728-f592c16e0f47.png)


`opción 1` - El usuario introduce data, almacenamos la data y la enviamos al api. Una vía de comunicación. Mediante el atributo "name".
https://angular.io/api/forms/NgForm

Se pueden pasar values o el contactForm

<form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm">

`opción 2` - si necesitamos cargar data en el formulario. Si necesitamos enviar data utilizamos el two-way data biding. `[(ngModel)]="model.name"` En lugar de utilizar directamente el ngModel utilizamos el banana on de box para hacer el two-way data binding. De esta manera enlazamos el html con el ts.


Para trabajar con formularios template driven hacen falta 3 cosas:

  1) Darle nombre a nuestro formulario mediante template template reference  #myForm="ngForm" 
  2) (ngSubmit)="onSubmitForm(myForm.value); 
  3) cada campo del formulario debe de tener el atributo nombre y la directiva NgModel

**Validaciones**
Se puede validar si se ha tocado un campo concreto, se haya introducido algún valor o sólo introduce el cursor y sale (onTouch). En el input #name="ngModel" en el <div [hidden]="name.valid || name.pristine" Sólo se muestra cuando el campo sea inválido o pristine cuando el usuario haya cambiado algo en la UI o se haya cambiado algo en la interface.

EL botón de enviar lo desabilitamos para que sólo sea válido si todo esta validado. En el button [disabled]="contactForm.invalid". No podrá hacer envíos.

También se puede validar el formulario des del .ts en el submit. Tendríamos que recibir todo el formulario en lugar del valor.
                
                onSubmit(values: any): void {
                        console.log('Form values', values);
                } sólo valor
                 onSubmit(values: any): void {
                        console.log('Form values', values);
                } con el form
                
![image](https://user-images.githubusercontent.com/67627523/157274933-46688c71-e5f1-48b6-bc94-d0af406add1a.png) La propiedad `value` nos da los valores introducidos en el formulario
![image](https://user-images.githubusercontent.com/67627523/157275411-bebd0aae-c20e-4fa5-8306-46b9f5f9c8f5.png) La propiedad `valid` se puede comprobar si es igual a true seguimos sino no hacemos nada

### RETO14 Formularios template-driven form Angular - video2
https://www.youtube.com/watch?v=epSVNMtG80I&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=15

https://github.com/domini-code/reto-angular-formulariosSs&t=0s

`Formularios Reactivos`https://www.youtube.com/watch?v=jJuE7-9T6Ss&t=0s

Todo parte de una clase `ABSTRACTCONTROL` que tiene varias subcontrol `FormControl`con un input, `FormGroup`y el `FormArray`.

`Reactives Forms Directives`(FormGroup, FormControl, FormControlNative, FormGroupName y FormArray)

* Creamos un nuevo componente `contact-reactive`
* Ponemos el componente en el app.component.html <app-contact-reactive></app-contact-reactive>
* Importamos el módulo de formularios reactivos al app.module.ts `ReactiveFormsModule`
* Copiamos el formulario de contact a contact-reactive. Se pueden combinar los dos tipos de formularios.
* No necesitamos en ngModel ni la referencia para la validación.
* Utilizamos la directiva formControlName="name"
* ¿Como gestionamos el formulario con el reactivo? En lugar de la variable de referencia utilizamos el [formGroup] + nombre del formulario.
* Creamos método y propiedad.

`OPCIÓN ADICIONAL:` Cuando tenemos un sólo input podríamos trabajar con esta opción: trabajar con el FormControl. Podremos ver cada vez que cambie el valor del input con un observable.

![image](https://user-images.githubusercontent.com/67627523/157436144-b75a42aa-7e36-476a-a783-c362b590ce19.png)

* Creamos un método para iniciar el formulario. Que va a devolver un FormGroup. 
* Declararemos las propiedades del formulario con el FormBuilder (creador de formularios). Para poder utilizarlo tenemos que hacer la importación al constructor.Podremos escoger entre(array, control y un group). El group es un método que espera un objeto a donde definir los campos.
* Los campos estan formados por el nombre del campo y argumentos. El 1r argumento puede ser null, vacío o definido. EL segundo las diferentes validaciones simples o en [] para pasar más de una. Pueden ser más de una. Como lo vamos a devolver `return`.

        initForm(): FormGroup{
                return this.fb.group({
                        name: ['', [Validators.required, Validators.minLength(3)]], (mínimo de caracteres 3)
                        checkAdult: ['', [Validators.required]],
                        department: [''],
                        comment: ['', [Validators.required]],
                })
        }
* Igualamos la propiedad `contactForm` en el `ngOnInit` con resultado del método `initForm`. La propiedad tiene el modelo de datos.
* Aplicamos el contactForm en el html.
 Validaciones: 

 campo name - directiva `ngIf`. 
 
  Accedemos al formulario mediante el `contactForm.get` y como string el nombre del campo comprobamos si ha sido tocado, pero también tiene que ser invalido. Propiedad `errors` que sólo existe si hay errores porque puede ser null. Tiene que ser requerido.

        <div *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.errors?.['required']" class="alert alert-danger">
        
- Otra validación es que sea tocada y que tenga más de 3 caracteres: `minlength tiene que ir en minúsculas`
        <div *ngIf="contactForm.get('name')?.touched && contactForm.get('name')?.errors?.['minlength']" class="alert alert-danger">Name must be longer then 3 characters.</div>
        
-> Se puede hacer de forma dinámica por si el método cambiara `Name must be longer than{{contactForm.get('name')?.errors?.['minlength']?.requiredLength}}characters.`

Para indicarle data podemos utilizar el patchValue. p.e: 
                        onPathValue(): void {
                                this.contactForm.patchValue({ name: 'Hola'}); y declararlo en el ngOnInit
                        }
                        
![image](https://user-images.githubusercontent.com/67627523/157476145-9378c62d-0c53-462d-8f0b-52bb4d02273c.png)

### RETO15 Configuración de rutas en Angular
https://www.youtube.com/watch?v=kHDSrHXqe-Y&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=16

La ruta es:

* Encargada de la navegación de un componente a otro.
* Pasar parámetros 
* Redireccionar
* Proteger rutas (guards)

- Creamos un nuevo componente `home`
- Creamos las rutas en el modulo `app-routing.module.ts`
        
        const routes: Routes = [
          - creamos una ruta especifica para cuando vaya al host el usuario. 
          - Redirección de ruta. Propiedad `pathMatch `calcula que tanto tiene que coincidir con la ruta para cumplirse o no. 
          - Angular evalua de arriba a abajo las rutas. Si no cumple la primera va a la siguiente y consecutivamente
          
                {path: '', redirectTo: '/home', pathMatch: 'full'},
                {path: 'contact-reactive', component: ContactReactiveComponent},
                {path: 'contact-template', component: ContactComponent},
                {path: 'home', component: HomeComponent},
        ];
        
- Llevar la directiva <router-outlet></router-outler> al componente principal.
- El html del app.component.html llevarlo al `home.component.html`
- Necesitamos enlaces para navegar más fácil no tener que introducir las rutas desde la barra de direcciones.
- Creamos un componente navbar y le indicamos que lo coloque en el app.module.ts `ng g c navbar -m app`
- Lo vamos a llamar des del app.component.html
- Incorporamos estilo bootstrap para el navbar https://getbootstrap.com/docs/5.1/components/navbar/
- Maquetamos el html indicando las rutas creadas. Para que nos lleve a las páginas indicadas.

         <a class="nav-link" href="/contact-reactive">Reactivo</a>
- Para que no recargue las páginas una y otra vez y la convierta en una `single-page` utilizamos el `routerLink` en lugar del href.
- Clase `active` de bootstrap. Cuando esta en una ruta determinada cambia un poco los estilos. Cambiamos background para que se vea la diferencia.
- Para saber que estamos en una determinada ruta Angular tiene una clase `routerLinkActive` que es parte de la directiva `routerLink`. Sirve para indicarle que señale cuando la ruta este activa.
- Para que no tenga varias opciones activas se puede hacer de dos formas:

        1. [routerLinkActiveOptions]="{exact: true}" en la ruta home
        <a class="nav-link active" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" routerLink="/home">Home</a>
        2. En la ruta bacia indicarle /home.
### RETO16 Rutas hijas, parámetros y QueryParams en Angular
https://www.youtube.com/watch?v=ZN5d9mqeSao&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=18

**Página 404 Angular APP**

      - creamos un nuevo componente `ng g c Pagenotfound -m app`
        usar ruta wildcard https://angular.io/api/router/Route#wild-cards
        {path: '**', component: PagenotfoundComponent} creamos una ruta para que nos redirija a una página 404 que podemos maquetar. 
        
        Ejemplo:
        
        https://freefrontend.com/html-css-404-page-templates/
        
**QueryParams Angular rutas** 

 En `navbar.component.ts`:
        
 1. InYectamos la clase router
        constructor ( private readonly router: Router) { }
        
 2. Creamos un método que podemos acceder a la instancia del router y al método `navigate`, al que le pasamos una URL y 2o parámetro una queryParams a donde                 pasaremos un objeto.
 3. 
        goToReactive(): void{
                this.router.navigate(['contact-reactive'], {queryParams: {name: 'Hola Mundo'}});
        }
        
En `navbar.component.html`
        
Replicamos el enlace de Reactive para utilizar una manera diferente al `routerLink`
          
          <a class="nav-link" routerLinkActive="active" (click)="goToReactive()">Reactive</a>
        
En la barra de direcciones del buscador aparece: http://localhost:4200/contact-reactive?name=Hola_Mundo
        
¿Como lo recuperamos? 
       
En el componente contact-reactive.component.ts creo una propiedad "name" a donde se va a almacenar el valor que se pasa por la URL. Utilizamos una directiva              
        `ActiveRoute`
        `name!`: string;
        constructor( private readonly fb: FormBuilder ,
                private readonly `route`: `ActivatedRoute`) { }

        ngOnInit(): void {
         accedo a la propiedad route y tenemos queryParams que es un observable emitiendo varias veces. 
         Nos va a devolver todos los params que necesitamos leer la propiedad name creada en el componente navbar. 
         Este tipo podemos importarlo en el html.
         
                this.`route`.`queryParams`.subscribe((params: Params) => {
                        this.`name` = params['name'];(este name viene de navbar)
                })
        }
        
Interpolamos el nombre. Si cambiamos la data en el buscador cambiaré en el html. <h1>Contact form {{name}}</h1>

En la ruta vacia indicarle /home.
        
 ![image](https://user-images.githubusercontent.com/67627523/157638044-fe09d6f3-9c10-4923-aa6c-e97205649d0d.png)
  
**Params Angular rutas**
  
Podemos pasar parámetros además de queryParams en la ruta.

Necesitamos pasar un ID en el contact-template.
vamos al `navbar.component.ts` y creamos un método. Utilizamos el método `navigate` al que le pasamos una ruta y el id 

                goToTemplate(): void{
                        this.router.navigate(['contact-template', `'580'`]);
                }
vamos al `navbar.component.html` y en lugar de utilizar el routerLink utilizamos el (click). Cuando el usuario haga clic vaya al método `goToTemplate`.

Al mirar en el navegador nos dará error, ya que hemos creado una ruta nueva.

¿Cómo convertirla en dinámica? En `app.routing.module.ts` le indicamos a la ruta determinada que habrá un valor que será dinámico:

                {path: 'contact-template`/:id`', component: ContactComponent},
                
Ahora sí reconoce la ruta. ¿Cómo recuperamos el id desde la UR

En el template, `contact.component.ts` creamos un id: string;

                Inyectamos la interface:
                
                constructor(private readonly route: ActivatedRoute) { }
                        Accedemos al route params
                        ngOnInit(): void {
                                this.route.params.subscribe((params: Params) => {
                                this.id = params[`'id'`];})(es la propiedad definida en la ruta)
                        }
                        
En el contact.component.html interpolamos el id <h1>Contact form - UserId{{id}}</h1>

Ya podemos recoger el valor del id venga de donde venga.
                
![image](https://user-images.githubusercontent.com/67627523/157638200-ac25cead-6c66-4e59-9c53-1f7d2d470bc8.png)

**Angular rutas hijas:**

- Creamos tres nuevos componentes dentro de la carpeta Users(list, details y user).
- Creamos las rutas en app.routin.module.ts
        
                {path: 'users', component: UserComponent, 
                        children: [
                        {path: 'list', component: ListComponent},
                        {path: 'details', component: DetailsComponent },
                        ]},
                        
- En el navbar.component.html hemos de crear la ruta:
        
                <li class="nav-item">
                        <a class="nav-link" routerLinkActive="active" routerLink="/users">Users</a>
                </li>
- En user.component.html creamos la estructura para ir a list y details. Utilizando el routerLink para crear un enlace con las rutas de las páginas. Para a ver         el contenido de las páginas hemos de utilizar la directiva <router-outlet></router-outlet> para pintar los diferentes componentes.
        
                        <div class="container">
                                <div class="row">
                                        <div class="col-6">
                                        <a routerLink="list">Users List</a>
                                        </div>
                                        <div class="col-6">
                                        <a routerLink="details">Details</a> 
                                        </div>
                                </div>
                        </div>
                        <router-outlet></router-outlet>
                        
![image](https://user-images.githubusercontent.com/67627523/157638868-9677ecfb-4490-485c-8a34-24bb0cead115.png)

### RETO17 Guardianes en Angular (Guards)
https://www.youtube.com/watch?v=Fhq20zubpPc&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=18

Ayudan a proteger una determinada ruta o bien para que no entren sino se está logado. Otra opción es si un usuario quiere salir de una ruta y hay datos por guardar. Hay que hacer las comprobaciones. Se pueden tener diferentes interfaces de guards.

- Creamos un guard ng g guard permissions
- nos pregunta que intefaces queremos implementar. Por defecto está marcada ()CanActivate
- Creamos otro guard para implementar otras interfaces y quitar el modo test

                ng g guard withoutSave --skip-tests=true
                ? Which interfaces would you like to implement? (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
                ( ) CanActivate
                ( ) CanActivateChild
                >(*) CanDeactivate
                ( ) CanLoad
  
- Permissions.guards.ts

        `CanActivate`
        
        Si puede usar esa ruta.
        
        Ha creado una clase que implementa una interface que permite al usuario acceder a una determinada ruta. Estructura:
        
        export class PermissionsGuard implements CanActivate {
                canActivate(
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
                return true;
                }
           }
     
Como en nuestro ejemplo no tenemos sistema de log in quitaremos del método CanActive el route y el state. 

Crearemos un método para simular si un usuario esta logado o no. De tipo booleano que nos devolverá false para que salte la alerta.

Le decimos al CanActive, si nuestro método `hasUser` devuelve true y de lo contrario se podría redireccionar al login. De momento, en pantalla se imprime un           alert.

Implementamos en el fichero de rutas app.routing.module.ts.

Hay que proteger la URL de usuarios. Se puede utilizar más de un guard que aplique para una ruta. Se verian afectadas las hijas también.
  
                {path: 'users', component: UserComponent, canActivate:[PermissionsGuard],
  
![image](https://user-images.githubusercontent.com/67627523/157655605-75598a2a-a381-4dcf-be2c-a317dfad826c.png)

  - withoutSave.guards.ts
        `CanDesactivate`
        
Si puede salir de esa ruta.
        
El usuario está en un formulario, intenta salir sin guardar los cambios se le avisa que tiene que hacerlo.
        
En este caso comprobamos el método, si esta logado devuelve true y si no lo esta se utiliza el `config` de JS como un alerma. Si devuelve true, el usuario             continuo sino no.
  
  ![image](https://user-images.githubusercontent.com/67627523/157655468-1ce365f4-74cf-4af4-826f-96641058085a.png)

### RETO18 ¿Para sirve un Resolver en Angular? 
https://www.youtube.com/watch?v=InZ9GZSTVX4&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=19

Interface que las clases pueden implementar para ser un proveedor de datos.
`Qué es Resolver? `

Es el mecanismo que se encarga en Angular de que cuando nosotros lleguemos a un determinado componente o una vista ya tengamos unos datos listos para renderizar y el componente no inicia su ciclo de vida hasta que la data no está lista.

Se debe usar con el router para resolver datos durante la navegación. 

Se debe implementar un método resolve() que se invoca cuando comienza la navegación. 

El router espera a que se resuelvan los datos antes de que finalmente se active la ruta.

- Creamos una carpeta `resolver` y un fichero `data.resolver.service.ts`
 Lo hacemos manual pero se puede hacer con la Cli.
 
 Estructura: una clase DataResolverService que implementa un resolve(interface) que viene desde el Angular router. Cuando hay una petición a una API con un json muy extenso o no hay garantías que responda en el tiempo necesario se hace un resolve para que devuelva esa data.

 - Creamos el método resolve que devuelve un observable.
        Lo que va a devolver con of que convierte la array de la const en un observable.
        import { Injectable } from "@angular/core";
        import { Resolve } from "@angular/router";
        import { Observable, of } from "rxjs";

        const departments = [ 'Marketing', 'Sales', 'Other' ]
        @Injectable({ providedIn: 'root'})

        export class DataResolverService implements Resolve<any>{

                resolve(): Observable<any>{

                        //TODO: CALL SERVICE
                        return of(departments);
                }
        }
- Implementamos el resolve.

Hay que ir a la ruta que lo queremos aplicar en app.routing.module.ts.
La ruta que vamos a aplicar es la de contact-reactive. Se utiliza la propiedad resolve que espera un objeto.

        {path: 'contact-reactive', component: ContactReactiveComponent, 
          canDeactivate:[WithoutSaveGuard],
          resolve: {departments: DataResolverService}},

¿Cómo obtenemos esa data cuando llegamos al componente?

        modificamos el componente que queremos la data `contact-reactive.component.ts`
        
        this.route.snapshot.data['departments'] la propiedad snapshot tiene otra propiedad data que es a donde se solicita nuestra data
        
        departments: string[] = [];

        ngOnInit(): void {
        this.departments = this.route.snapshot.data['departments']
        En `contact-reactive.component.html` podemos comprobar que la data está llegando.
        <pre>{{departments}}</pre>

        Modificamos el select hardcodeado para obtener los datos de manera dinámica. Podemos incorporar o anular departamentos(data) del resolve.
        
        <select>
        <option *ngFor="let department of departments" [value]="department">{{department}}</option>

![image](https://user-images.githubusercontent.com/67627523/157689490-c5987c6c-f452-4d0a-a3f5-121fbb2d3ab7.png)

### RETO19 Lazy loading rutas Angular
https://www.youtube.com/watch?v=dGqMnCUmr30&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=20

EL lazy loading nos puede ayudar a mejorar el performance de la aplicación. 

Lazy loading o carga diferida es la técnica que utiliza Angular. Retrasa la carga de un determinado módulo hasta que el usuario o la aplicación lo necesita.

`ng build` - Angular preparará la aplicación para llevar a producción. Carga todos los módulos se necesiten o no.
Vamos a decirle a Angular el módulo específico lo queremos cuando realmente se necesite:

- Creamos un módulo que nos creará dos módulos `ng g m contact-reactive --routing true`:
- genera un feature module  https://angular.io/guide/feature-modules (Este módulo estará de manera independiente)
- genera un módulo de rutas

`app-routing.module.ts` 

- Copiamos la ruta desde el módulo principal al nuevo módulo-routing.
- Redirigimos hacía la nueva ruta. Creamos un path con la misma ruta. Utilizamos la propiedad `loadChildren` y utilizando la sintaxis de dynamic import                  (importando el módulo de manera dinámica). Le pasamos un string con la ruta del nuevo módulo. Nos va a devolver una promesa que nos va a devolver el módulo
        
        {path: 'contact-reactive', loadChildren: ()=>
                import ('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule)
        },
        
 `contact-reactive-routing.module.ts`(tiene la misma configuración que el app-routing.module.ts)
 
 En el feature module `contact-reactive.module.ts` tenemos que declarar en declarations el formulario `ContactReactiveComponent` 
 y borrarlo del módulo general `app.module.ts`. 
        
 Nos da un error que nos indica que hay que importar el módulo de formularios reactivos (ReactiveFormsModule). También lo podemos borrar del módulo principal.
                
        Error: src/app/contact-reactive/contact-reactive.component.html:3:31 - 
        error NG8002: Can't bind to 'formGroup' since it isn't a known property of 'form'.      

                     
        <form (ngSubmit)="onSubmit()" [formGroup]="contactForm">
                                      ~~~~~~~~~~~~~~~~~~~~~~~~~
                                                        
![image](https://user-images.githubusercontent.com/67627523/158571246-e7bc2e38-e663-4ef6-be52-0498c14a840a.png)
                                                   
### RETO20 forRoot & forChild
https://www.youtube.com/watch?v=i8jRNClDGRg&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=21

imports: [RouterModule.`forRoot`(routes)], no sólo tiene que ver con las rutas, sino que estos métodos estáticos que nos proporciona Angular los podemos utilizar como una library(bibliotecas).

`forRoot` - se utiliza para colocar todas las rutas en el módulo principal raíz. Todo lo que no es lazy loading será eagle carga de manera inmediata todo el bondel. En principio, sólo se utiliza un `forRoot` en la aplicación. La intención es tener de manera directa. Lo que sea lazy loading tiene que ser `forChild` porque puede estar en otra factory (todo lo que va a necesitar la aplicación en ese momento). Al ser un módulo hijo Angular no lo carga en el inyector global. Se carga a demanda, cuando se necesita.

Son prácticamente iguales. La diferencia es que Angular utiliza un método u otro para saber si estamos en el inyector principal o en nuestro propio.

### RETO21 ¿Cómo hacer una petición HTTP en Angular? CRUD
https://www.youtube.com/watch?v=Ypr6gU_rNlo&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=22

¿Qué es HttpClient Angular?

HttpClient es un cliente con los verbos REST, y está basado en Observables.

¿Cómo hacer una petición HTTP en Angular?

        Crear añadir ciudades
        Crear borrar ciudades
        Crear leer ciudades
        Crear update ciudades
        
        Crear put ciudades
        Crear get ciudades

        Botón deleate ocultar. Que sólo aparezca si se quiere borrar.
  
#### CRUD (httpClient con los métodos post, get, put y delete)

1. Cambio en el estilo del listado de `cities`:

         en el componente `city` incorporamos un ul que estaba en `home`. 
         
         Utilizamos clases de bootstrap.
         
         Añadimos botón delete. 
         
         Reacción cuando el usuario haga clic. 
         creación del método onCityDeleate('id') al que le pasamos el id de la city. 
         Vamos a emitir por lo que tenemos que crear un evento @output() cityDeleteEvent
         
         En `home `escuchamos al evento de `cities`.
         
         TODO: Nos falta crear el objeto en cities crear una propiedad de nombre y de id. 
         Para gestionar el CRUD. Creamos un inteface en el service.

2. Creación del services ng g s services/data --skip-tests=true(para que no genere el fichero de testing)
 
         Creación de una interface en el servicio para crear el `id` y el `nombre` que necesitamos en `cities`. 
         Aquí crearemos los métodos para hacer las peticiones.
                
                export interface City{
                        _id: string;
                        name: string;
                }

3. Comunicación con httpClient quien comunica con nuestro server.(appModule importar el httpClientModule import { HttpClientModule } from '@angular/common/http')  
        
        Ahora podemos incluir el httpClient en el constructor del servicio.    

        Utilizamos un servicio externo como backend https://crudcrud.com
        
        Nos da una URL para gestionarlo https://crudcrud.com/api/84c96a51ea8043d8beeada03d6fadf56
        
        Creamos una entity a partir de esta URL
               
                https://crudcrud.com
          
 4. Creamos los 4 métodos para comunicarnos con la API una vez hayamos creado el httpClient:(return this.htpp más el verbo, el método tiene el nombre del verbo http)
                
                - `POST`(añadir una nueva ciudad). En el método tenemos que declarar: 
                        la URL y luego el body(opcional). En el body le pasamos el nombre que recibirá el nombre de la ciudad
                        
                        addNewCity(city: string):Observable<City>{
                                const body = {name: city};
                                return this.http.post<City>(this.API, body);
                        }
                - `GET` () vamos a utilizar una array de cities
                
                        getCities(): Observable<City[]>{
                                return this.http.get<City[]>(this.API)
                        }
                - `UPDATE` la estructura del put viene definida por la API
                
                        updateCity(city:City): Observable<void>{
                                const body = { name: city.name}
                                return this.http.put<void>(`${this.API}/${city._id}`, body);
                        }
                - `DELETE`
                        
                        deleteCity(id: string):Observable<void>{
                                return this.http.delete<void>(`${this.API}/${id}`);
                        }
         
5. Creamos la API con la URL que nos da el servicio de back. La creamos en `enviroment` y la entity al final.

                enviroment:
                export const environment = {
                production: false,
                api: 'https://crudcrud.com/api/84c96a51ea8043d8beeada03d6fadf56/cities',
                };

                En el service:
                private readonly API = environment.api;
                
6. Modificar los métodos del `home`, ya que todo lo que era string ahora es `City`.

                cities: City[] = [] nos devuelve una array
                name: ya no lo necesitamos

          implementamos el método onInit para ir a la API y hacer la petición para recuperar las ciudades. 
          
             1. Mediante el método constructor hacemos la inyección del service(DataService).
             2. En el método ngOnInit montamos la estructura para llamar a la API con el método que es un observable. 
                Dentro de él recibimos un respon con data. 
                Le llamaremos cities pero es un respon. Aquí recuperaríamos los datos de la API.
                
                                 ngOnInit(): void {
                                        this.dataSVC.getCities()
                                        .subscribe(cities => {
                                                this.cities = [...cities];
                                        })
                                }
             3. Modificamos el home.html
                                export class CitiesComponent {
                                        @Input() city!: string; => `ahora será de tipo City`
                                        @Input() selection!: string; => `ahora será de tipo City`
                                        @Output() citySelectedEvent = new EventEmitter<string>();=> `ahora será de tipo City`
                                        @Output() cityDeleteEvent = new EventEmitter<string>();
                                onCitySelected(city: string): void{=> `ahora será de tipo City`
                                        this.citySelectedEvent.emit(city); 
                                }
                A donde describíamos el objeto hemos de definir que propiedad hay que imprimir. {{city | titlecase}}=> city.name.
                
               También modificamos la condición [ngClass]= "{'active': city === selection}"=> será city._id y selection._id, 
               cuando el id coincida que se aplique el active.
               
                Modificamos el pipe:
                
                                transform(values: string[], arg: string): string[] {=>`ahora recibimos una array de ciudades`
               Cambiamos el value por ciudad.
          
=> Añadimos ciudades en `home.component.ts`

                Enviamos a la API la nueva ciudad y añadimos la respuesta, lo que nos devuelve la API, a la array de ciudades
                
                                addNewCity(city: string):void {
                                        //this.cities.push(city);
                                        this.dataSVC.addNewCity(city)
                                        .subscribe(res => {
                                                this.cities.push(res)});
                                }
          
=> Volvemos al formulario para hacer cambios:

                Añadimos propiedad selection de tipo ciudad, para saber cuándo el usuario selecciona una ciudad.
                
                En el form.html añadimos [(ngModel)]="selection?.name" le tenemos que indicar el name para que no salga el error [object][object]
                
                En el home.html podemos pasar la propiedad selection.
                
                Da error de que hay que definir un name. name="newItem"

### Modificaciones a hacer:

- En form-new-item.component. html cuando enviamos a guardar le decimos que cuando se envie la propiedad se quede en blanco. (click)="onAddNewItem(newItem.value); newItem.value=''"
- poner ? en todos los selection
- Ocultar botón delete. Hasta que no se seleccione no se enseña(la ciudad marcada sea igual al id de la ciudad). En cities.component.ts                                   en el           <button> *ngIf= "city?._id === selection?._i
          
![image](https://user-images.githubusercontent.com/67627523/158240961-c35bfff1-d65e-424e-bba2-d155ae3ec29f.png)
          
=> Borramos ciudades en `home.component.ts`
  
         - Esta imagen 
  
              viene de onCitySelected(city: City): void{
                                                        console.log('City->', city);
                                                        this.selection = city;
                                                        }
                                                        onCityDelete(id: string): void{
                                                        console.log('id', id);![image](https://user-images.githubusercontent.com/67627523/158793868-0c51ca3a-67db-4763-a808-34eb120c7ffc.png)
                                                        }
                                 . Creamos un confirm('Are you sure?') para preguntar al usuario
                                 . if(confirm('Are you sure?')){
                                        this.dataSVC.deleteCity(id).subscribe(() => {
                                                const tempArray = this.cities.filter(city => city._id !== id);
                                                this.cities = [...tempArray];
                                                this.onClear(); => para que borre la consulta del input
                                        });
          
=> upDate ciudades en `home.component.ts`

=>Ocultamos los botones
                                form.component.html - Hacer una condición si se selecciona un name funciona un botón sino el otro
                                <button *ngIf="!selection?.name" 
                                <button *ngIf="selection?.name"

### RETO22 HTTP Interceptor Angular
https://www.youtube.com/watch?v=4ci7RfV0Pwc&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=23

Interceptor - intercepta una petición http y la puede modificar. Es una especie de middlewear que esta entre el servidor y nuestra aplicación de Angular. Evita que repitamos parámetros en las diferentes peticiones, como unit o appid. 

En esta aplicación no estamos utilizando ni headers ni ningún parámetro, vamos a añadir un loading utilizando el interceptor para que cada vez que haya una petición http lancemos el loading. Para no tener que estar pensando cuando lo mostramos o cuando lo ocultamos.

=> Creamos nueva carpeta y nuevo componente `ng g c shared/spinner -m app`
        spinner loading hear - https://codepen.io/DariaIvK/pen/EpjPRM
=> Copiamos el código html y el css del loading.
          
=> Colocamos el selector <app-spinner></app-spinner> en app.component.html.
          
=> Creamos un service para que decida cuando mostrarse o cuándo ocultarse. `ng g s shared/spinner`
                . Creamos la propiedad isLoading$. `El símbolo del $ nos indica que es un observable. Convención`.
                . Creamos dos métodos para enseñar u ocultar el loading.
          
=> Inyectamos el service en el componente `spinner spinner.component.ts`. Para saber cuando mostrarlos u ocultarlo. 
  
                . Creamos la propiedad isLoading$. Podremos acceder a la propiedad en nuestro service.
                . Añado html en el componente para utilizar el observable y para subscribirlo, ya que sólo no haria nada. Utilizamos un pipe (async). Para que subscribir al valor del observable como cuando no este. Utilizamos "overlay" para cuando el loading este cargando y así bloqueamos la pantalla.
                template: `
            
              <div class="overlay" *ngIf="isLoading$ | async">
                <div class="lds-heart">
                <div></div>
              </div>
            </div>`
          
=> Creamos el interceptor `ng g interceptor shared/spinner/spinner --skip-tests=true`
  
        El fichero que se crea sigue la estructura de: una clase de typescript que está implementando una interface el decorador inyectable y un método que tiene la request y un next. Es muy parecido a un middlewear como en backend. Se sigue la ruta, se continua adelante(next) si todo se cumple.
  
         Utilizamos el pipe y dentro utilizaremos un operador de rxjs(finalize). Llamaremos al método hide para que oculte el spinner . `Creación del interceptor`
          
=> Implementamos en el app.module para que escuche las peticiones http. En providers:
  
        providers: [
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ], El multi significa que podemos utilizar más de un interceptor.
          
=> Modificamos estilos a la clase del spinner para que quede por encima de todos los elementos de la web. Y este centrado.
~~
Ejemplos de spinners: https://loading.io/css/
        
### RETO23 ¿Qué es un Observable? Diferencias entre Promesa y Observable
https://www.youtube.com/watch?v=tuacd35TWIQ&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=24

**Programación Reactiva**
         
La es programación orientada al manejo de streams de datos asíncronos y la propagación de los cambios.
  
En JavaScript se utiliza `RxJS`. 
  
        Una library para componer programas asíncronos y basados en eventos usando secuencias observables.
        Nos permite hacer programación reactiva.
        Esta library no es específica de Angular la podemos utilizar en otras tecnologías.
        Términos relacionados que hay que tener en cuenta:
        Observables, Operators, Suscription, Subjects

*¿Qué es un Observable?*
          
`Un string de datos`: Son colecciones o secuencia de eventos continuos ordenados en el tiempo.
  
                1. Eventos de la UI(un botón)
                2. HTTP Request
                3. Web Sockets
                4. Estado de una APP
                Representa una relación de 1 a infinito. Basado en el `patrón Observe` cuyos pilares lo forman Observable, Observadores, Suscripciones. 
          
`Subject` Es un tipo de observable especial. Tiene el mismo comportamiento que el observable, pero este puede compartir data con varios observadores u observers. p.e.(interceptor que utilizamos un subject que puede ser un observador y un observer a la vez)
          
***Tipos:***
          
                1. Subject
                2. Behavior Subject. Tiene que inicializarse.
                3. Replay Subject
                4. Async Subject
        
`Observable vs Promise`
          
   ***Promesas***
          
                1. Se ejecuta inmediatamente.
                2. Emite un solo valor. Puede ser un resort o un reject.
                3. Envía los errores a las promesas hija. Hace como un push.
                4. Usa la cláusula .then()
          
  ***Observables***
          
                1. No comienza hasta que no hacemos la suscripción.
                2. Múltiples valores a lo largo del tiempo. Puede causar problemas de memo link ya que está continuamente abierto.
                3. Observable proporciona operadores ( Unos 300 operadores, p.e. RxJS, map, etc).

En la aplicación:
          
        `data.service.ts` - Utilizamos observables normales, de string de datos. Utilizamos el http que viene dado por el módulo de Angular. Estos observables se completan de manera automática y no causan memory lix. P.e el método addCity(hasta que no hacemos el subscribe no se empieza a consumir el observable. Pero sólo lo hace una vez)
          
        `spinner.service.ts` - Declaramos una propiedad de tipo subject. Este observable también es un observer, se producen valores booleanos. Se puede leer fuera de la aplicación.
### RETO24 Content Projection en Angular (proyección de contenido en Angular)
https://www.youtube.com/watch?v=UMYuF7-CTfg&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=25
          
https://angular.io/guide/content-projection

La proyección de contenido es un patrón en el que inserta o proyecta el contenido que desea usar dentro de otro componente. Es útil para la reutilización de componentes.
  
Por ejemplo, podría tener un componente Tarjeta que acepte contenido proporcionado por otro componente.

Implementaciones posibles:

        . Single-slot content projection
        . Multi-slot content projection
        . Conditional content projection

=> Creamos un nuevo componente `ng g c card -m app`
          
=> Creamos una card de bootstrap
          
=> Llamamos al nuevo componente `en home.component.html`. Creamos todas las `cards` que queramos.
          
**Como implementamos el contect projection?**
          
***En el card.component.html***  
          
              - Definimos <ng-content></ng-content>
                          <ng-content select="[card-body]"></ng-content> 
              - Nos da la opción de un selector para definir en qué slot queremos trabajar el contenido. Le podemos pasar clases, id o atributos. 
                Las clases son menos controlables. En este caso, colocamos un atributo.
          
***En el home.component.html***
          
                - Pasamos nuestro contenido. 
                - Se renderiza de una manera más fácil que con el input, pero no de manera dinámica. 
                - Da igual el orden ya que se rige por los slots.
                - Se puede reutilizar de manera fácil.
                - Se cambia el content.
### RETO25 NG-CONTAINER & NG-TEMPLATE ANGULAR 🅰️ 
https://www.youtube.com/watch?v=H1D4NwhOAm8&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=26

NG-TEMPLATE
El elemento ng-template de Angular define una plantilla que no se representa de forma predeterminada.

Con ng-template, puede definir el contenido de la plantilla que Angular solo representa cuando usted, directa o indirectamente, le indica específicamente que lo haga, lo que le permite tener un control total sobre cómo y cuándo se muestra el contenido.

NG-CONTAINER https://angular.io/api/core/ng-container

Un elemento especial que puede contener directivas estructurales sin agregar nuevos elementos al DOM.

El ng-container nos permite usar directivas estructurales sin ningún elemento adicional, asegurándonos de que los únicos cambios de DOM que se aplican son los dictados por las propias directivas.

Podemos sustituir el div por  <ng-container *ngIf="selection?.name">. Lo que supone un elemento menos en el DOM.
  
Otra situación, cuando se quiere utilizar un ngFor y un ngIf p.e.verificar si una determinada propiedad está activa en la variable local. No se puede utilizar dos directivas. Utilizaríamos en ng-container para comprobar que hay al menos una ciudad. Si esa condición se cumple pasa y nos enseña las ciudades sino da un mensaje al usuario.

        <ng-container *ngIf="cities.length > 1"; else templateEmpty>
                <!--<ul>-->
                <app-cities *ngFor="let city of (cities | filter: criteria)"
                            (cityDeleteEvent)="onCityDelete($event)"
                            (citySelectedEvent)="onCitySelected($event)" 
                            [city]="city" [selection]="selection">
                </app-cities>
                <!--</ul>-->
        </ng-container>
        <ng-template #templateEmpty>
            We dont have cities xD
        </ng-template>
  
Al usuario no le reporta nada, ya que no ocurre nada. Para eso podemos utilizar el ng-template.

Ganamos performas ya que ahorramos en elementos del DOM y no tiene que recorrer en el tree más elementos.

### RETO26 ¿ViewChild Angular cómo funciona? 🅰️
https://www.youtube.com/watch?v=6J5nK7PKT6U&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=27

Es un decorador de propiedades que configura una consulta de vista.
  
El detector busca el primer elemento o directiva que coincida con el selector en la vista (DOM).
  
Si el DOM cambia y un elemento secundario nuevo coincide con el selector, la propiedad se actualiza.

**selectores admitidos**
  
. Cualquier class decorada con @Component o @Directive
. Template reference variable como string
. TemplateRef (ng-template)
. NgModel


Proyecto:

En el template `contact.component.html`:
  
        . evento submit pasábamos el contacForm porque en el .ts no teníamos manera de acceder a él 
        (ngSubmit)="onSubmit(contactForm)" - eliminamos el argumento contactForm. 
  
        Vamos al .ts para utilizar el @ViewChild() que espera un selector. 
  
        En este caso utilizaremos la referencia del template variable `contactFor` que utilizamos como string. Lo tipamos. 
        De esta manera, ya podemos acceder al formulario en el método onSubmit(). 
        Así tendremos todos los métodos y estados que tiene el formulario como tal.

componente `form-new-item.html`:

        . Se encarga tanto de modificar una ciudad como añadir una nueva. 
        . Para llamar a los métodos de añadir o modificar pasábamos unos argumentos.
  
        Modificaciones: 
        . no enviamos el newItem.value. 
        . Modificamos los métodos en .ts. Utilizamos el template variable `newItem`. 
        . Será de tipo `ElementRef` @ViewChild('newItem') newItem!: ElementRef;
        . Después de llamar a los métodos, seteamos a vacío el valor del template reference. 

Se puede quitar y trasladarlo al .ts. Esta lógica es más importante que este aquí, ya que se puede testear y asegurarnos de que el input queda en blanco después de añadir o borrar un elemento. 

componente `form-new-item.ts`      

    . Cuando creamos un nuevo Item recibiremos nativeElement y el valor. Como lo hemos tipado como ElementRef tendremos acceso a la propiedad nativeElement.
    . El selection lo podemos pasar por el ts en lugar de por el html. Era nuestro item.
  
Sí queremos que la aplicación gane el foco. Como tenemos la referencia del selector, dentro del método AfterViewInit es mucho más fácil añadirle métodos como el `focus`.


>Hay que utilizar el decorador @ViewChild en el ciclo de vida adecuado, cuando la vista se haya creado, ya que si no dará undefine. Para evitar esto hay un método `AfterViewInit` que se encarga de asegurarse que nuestra vista ha iniciado. En nuestro caso, el ciclo de vida no existe y por eso no ha iniciado. Se busca el elemento en el DOM cuando realmente existe. Podremos acceder al Input.

También podemos utilizar la `directiva NgModel como selector`.
  
        `home.component.ts` añadimos el @ViewChild(NgModel) filterInput!: NgModel;
          
>ojo: en el html es ngModel y en el .ts es NgModel en mayúsculas
          
Cuando el input cambie podríamos crear un método filter o un buscador sin tener que utilizar el pipe. Podemos utilizar el valueChanges que es un observable. Cada vez que el input del buscador cambie lo recibiremos y podremos reaccionar a ese cambio.
  
                ngAfterViewInit(): void {
                        this.filterInput.valueChanges?.subscribe(res => console.log('res', res))
                }
### RETO27 Comunicación entre componentes en Angular con Observable 🅰️
https://www.youtube.com/watch?v=Sr1tg_NrQFk&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=28

https://www.danywalls.com/how-to-share-data-between-components-in-angular

Como comunicar componentes en Angular con Observables. 

**BehaviourSubject**
Another good solution is to use a service to share data between components to sync the actual data. Rxjs with BehaviorSubject gives us the power to communicate components with extra points.

`data.service.ts`
Modificaciones en el `service`

En el home.component.ts tenemos una propiedad `selection`. Esta propiedad la vamos a llevar a un observable para poderlo utilizar en el reactive form.
1. creación de una constante `initCity` en el service.
  
        const initCity:City = {
                _id: '',
                name: ''
        };
2. Utilizamos el BehaviorSubject(le tenemos que pasar un argumento por defecto)
  
        private city$ = new BehaviorSubject<City>(initCity);
  
3. Creamos un get selectedCity$, que va a ser un observable y va a devolver un observable. Esto estará expuesto publicamente. Para poder leer la propiedad.
        
        get selectedCity$():Observable<City>{
                return this.city$.asObservable();
        }
4. Necesitamos setear/guardar una ciudad. Llamamos a la propiedad city aplicando el método `next` a donde vamos a almacenar la ciudad
  
        setCity(city:City):void{
                this.city$.next(city);
        }

**Diferencias entre subject y BehaviorSubject:**

  
**Subject**    
  
* Observable especial que permite realizar diversas tareas.
* No permite emitir el nuevo valor emitido.
  
**BehaviorSubject**
  
* Observable especial.
* Emite el nuevo valor a todas las nuevas suscripciones. 
* Permite obtener el último valor emitido con el getValue().
* Requiere un valor por defecto.
* Inmediatamente hay una suscripción.
  
`home.component.ts`
  
- Tenemos inyectado el service: `constructor(private readonly dataSvc: DataService){}`
- Utilizamos la dataSvc. Seleccionando la propiedad pública `selectedCity$` que es un observable por lo tanto nos podemos suscribir, nos va a devolver una ciudad. Le vamos a asignar el valor que devuelva a la propiedad `selection`
  
        ngOnInit(): void {
                this.dataSvc.selectedCity$.subscribe(city=> this.selection = city)

- En la propiedad `onCitySelecte` se asignaba a la variable local `selection` el valor. Ahora al tener un método en el service `dataSvc` la guardamos en el servicio para si alguien ultiza la propiedad tendré el valor actualizado.
  
        onCitySelected(city: City): void{
                this.dataSvc.setCity(city);
        }

`contact-reactive.component.ts`(p.e. quisieramos saber la ciudad seleccionada en este componente)
  
        1. Inyectamos el service. `private readonly dataSvc: DataService`
        2. Creamos una propiedad que será un observable que será igual a la dataService más 
        una propiedad que se llama igual. `selectedCity$ = this.dataSvc.selectedCity$;`

`contact-reactive.component.html`
  
Vamos a mostrar el nombre que se esta pasando. Utilizaremos un pipe `async` para permitirnos suscribir al observable. Sólo queremos mostrar el nombre por lo que utilizaremos ().
  
        <h1>Contact form {{name}} {{(selectedCity$ | async)?.name}}</h1>

### RET28 Configurar eslint y prettier en Angular 🅰️
https://www.youtube.com/watch?v=bCkm9uxF4jY&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0&index=29

https://gist.github.com/bezael/5086db4bf7fd4655969a8da4e5ec1ab8 `fichero configuración`

https://github.com/angular-eslint/angular-eslint#notes-for-eslint-plugin-prettier-users `documentación schematics`(buscamos en package->eslint-pluguin->docs/rules->use-lifecycle-interface.md(regla aplicada))

El último reto trata de mostrar todas las configuraciones de ESLint y el Prettier. Sus configuraciones, estructura, funcionamiento, etc.

1. instalación del schematics ESLint. [Install Angular ESLint](#ESLint-configuration)
2. instalación dependencia Prettier.
* Crear fichero en el route. [Pretier configuration `.prettierrc`](#Prettier-Configuration)
* Crear fichero en el route. [Pretier configuration `.prettierignore`](#Prettier-Ignore)
3. Instalación extensiones VSCode [VSCode](#VSCode-extensions)
4. Dentro del VSCode de Windows->archivo->preferencias->configuración->parte superior derecha carpeta fichero settings.json(abrir configuración(JSOn))[settings.json](#Add-following)
5. Creación de un script. Para fijar errores de manera automática [Fix Lint en package.json](#Fix-Lint)
6. En el terminal escribimos `ng lint` y determinará si hay errores en los ficheros
  
![image](https://user-images.githubusercontent.com/67627523/158793995-6d10ae89-ccb8-4844-9e49-ca7a18d22b9b.png)
                                

### Install Angular ESLint
`ng add @angular-eslint/schematics`
Crea un fichero ESLint.json y ha modificado ficheros .json.
En el fichero `ESLint.json` añado una nueva rule: (si importamos el ngOnInit el método no puede estar vacío, lo tenemos que estar utilizando)
        
  "rules": {
    "@angular-eslint/use-lifecycle-interface": [
      "error"
    ]
  }
}

### Install Prettier and Prettier-ESLint dependencies
`npm i prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier -D`
Sólo se necesitan en desarrollo -D.

## ESLint configuration
Filename: `.eslintrc.json`
```json
// https://github.com/angular-eslint/angular-eslint#notes-for-eslint-plugin-prettier-users
{
  "root": true,
  "ignorePatterns": ["projects/**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "parserOptions": {
        "project": ["tsconfig.json"],
        "createDefaultProgram": true
      },
      "extends": [
        "plugin:@angular-eslint/recommended",
        "plugin:@angular-eslint/template/process-inline-templates",
        "plugin:prettier/recommended"
      ],
      "rules": {
        "@angular-eslint/component-class-suffix": [
          "error",
          {
            "suffixes": ["Page", "Component"]
          }
        ],
        "@angular-eslint/component-selector": [
          "error",
          {
            "type": "element",
            "prefix": "app",
            "style": "kebab-case"
          }
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            "type": "attribute",
            "prefix": "app",
            "style": "camelCase"
          }
        ],
        "@angular-eslint/use-lifecycle-interface": [
          "error"
        ],
        "@typescript-eslint/member-ordering": 0,
        "@typescript-eslint/naming-convention": 0
      }
    },
    {
      "files": ["*.html"],
      "extends": ["plugin:@angular-eslint/template/recommended"],
      "rules": {}
    },
    {
      "files": ["*.html"],
      "excludedFiles": ["*inline-template-*.component.html"],
      "extends": ["plugin:prettier/recommended"],
      "rules": {
        "prettier/prettier": ["error", { "parser": "angular" }]
      }
    }
  ]
}

```

### Prettier Configuration
Filename: `.prettierrc`
```json
{
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "trailingComma": "es5",
  "bracketSameLine": true,
  "printWidth": 80
}
```
### Prettier Ignore
Filename: `.prettierignore`
```
dist
node_modules
```


### VSCode extensions:
```
dbaeumer.vscode-eslint
esbenp.prettier-vscode
```

### Add following to your .vscode/settings.json file:
```
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": false
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "editor.formatOnSave": false
  },
},
"editor.suggest.snippetsPreventQuickSuggestions": false,
"editor.inlineSuggest.enabled": true
```

### Add Fix Lint and Prettier errors command in package.json
`"lint:fix": "ng lint --fix"`





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
