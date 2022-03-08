import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name: 'filter'
})

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
                result = [...result, value];
            }
        }
        return result;
    }
}