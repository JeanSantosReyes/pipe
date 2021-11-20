import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

//Importar el pipe creado en el modulo que se encuentra el pipe creado
export class MayusculasPipe implements PipeTransform {
    transform(valor: string, enMayusculas: boolean = true) {
        /* if (enMayusculas === true) {
            return valor.toUpperCase();
        } else {
            return valor.toLowerCase();
        } */
        return (enMayusculas) ? valor.toUpperCase() : valor.toLocaleLowerCase();
    }
}