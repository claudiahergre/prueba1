import { Injectable } from '@angular/core';
import { Entrada } from '../interfaces/entradas.interface';

@Injectable({
  providedIn: 'root'
})
export class EntradasService {

  private arrEntradas: Entrada[]

  constructor() {
    this.arrEntradas = [
      {
        date: 'monday',
        tittle: 'hacer la compra',
        description: 'pan, huevos, verduras',
      }
    ]
  }

  getAll(): Entrada[] {
    return this.arrEntradas;
  }


  crearEntrada(nuevaEntrada: Entrada) {
    this.arrEntradas.push(nuevaEntrada)
    console.log(this.arrEntradas)
  }


}
