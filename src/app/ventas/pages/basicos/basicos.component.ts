import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'juanlu';
  nombreUpper: string = 'JUANLU';
  nombreCompleto: string = 'jUaNlU mOrAn';

  fecha: Date = new Date(); // el dia de hoy


}
