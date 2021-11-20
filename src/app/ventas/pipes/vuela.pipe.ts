import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

//Importar el pipe creado en el modulo que se encuentra el pipe creado
export class VuelaPipe implements PipeTransform {
    transform(valor: boolean) {
        return (valor) ? 'vuela' : 'no vuela';
    }
}