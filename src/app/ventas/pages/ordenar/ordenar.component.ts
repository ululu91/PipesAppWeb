import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;

  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'SpiderMan',
      vuela: false,
      color: Color.rojo 
    },
    {
      nombre: 'SuperMan',
      vuela: true,
      color: Color.azul 
    },
    {
      nombre: 'Venom',
      vuela: false,
      color: Color.negro 
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde 
    },
    {
      nombre: 'Capitan America',
      vuela: false,
      color: Color.azul 
    },
  ]

  cambiarValor() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
