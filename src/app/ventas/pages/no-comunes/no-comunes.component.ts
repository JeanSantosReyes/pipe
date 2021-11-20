import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  /* ******************** i18nSelect ************************ */
  // nombre: string = 'Jean Santos'
  // genero: string = 'masculino'
  nombre: string = 'Bella Reyes'
  genero: string = 'femenino'

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }
  cambiarPersona() {
    this.nombre = 'Jean Santos';
    this.genero = 'masculino'
  }

  /* ******************** i18nPlural ************************ */
  clientes: string[] = ['Maria', 'Jean', 'Bella', 'Jubi']
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }
  borrarCliente() {
    this.clientes.pop();
  }

  /* ******************** KeyValue Pipe ************************ */
  persona = {
    nombre: 'Jean',
    edad: 24,
    direccion: 'Montecristi'
  }
  /* ******************** KeyValue Pipe ************************ */
  heroes = [
    {
      nombre: 'Supermna',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Acuaman',
      vuela: false
    }
  ]
  /* ******************** Async Pipe ************************ */
  miObservable = interval(2000); //va emitir desde el 0 hasta el 1000

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data de promesa')
    }, 3500)
  })
}
