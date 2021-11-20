import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'jean';
  nombreUpper: string = 'JEAN';
  nombreCompleto: string = 'JeAn SaNtOs'

  fecha: Date = new Date(); //Dia de hoy

}
