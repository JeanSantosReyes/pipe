import { Component } from '@angular/core';
import { Heroe, Color } from '../../interface/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = true;

  cambiarMayusculas() {
    this.enMayusculas = !this.enMayusculas
  }

  /* ******************** Tablas y toolbar ************************ */

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Lintena Verde',
      vuela: true,
      color: Color.verde
    }
  ]
  cambiarOrden ( valor:string){
    this.ordenarPor = valor;
  }
}
