import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //i18nSelect

  nombre: string = 'ululu';
  genero: string = 'masculino';

  invitacionMapa = {

    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural

  clientes: string[] = ['Maria', 'Juan', 'Pedro', 'Manuel', 'Julia'];
  
  pluralMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarNombre( ) {
    this.nombre = 'Vanesa'
    this.genero = 'femenino'
  
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe

  persona = {
    nombre: 'Juanlu',
    edad: 30,
    direccion: 'Madrid, aluche'
  }

  //Json Pipe

  heroes = [
    {
      nombre: 'SuperMan',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Ululu',
      vuela: true
    }
  ]

  //Async value
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500);
  });


  constructor() { }

  ngOnInit(): void {
    
  }

}
