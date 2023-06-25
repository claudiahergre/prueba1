import { Component, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntradasService } from 'src/app/services/entradas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  entradasService = inject(EntradasService)
  activatedRoute = inject(ActivatedRoute)

  formulario: FormGroup

  constructor() {
    this.formulario = new FormGroup({
      date: new FormControl(),
      tittle: new FormControl(),
      description: new FormControl(),
    })
  }

  envioFormulario() {
    console.log(this.formulario.value)
    this.entradasService.crearEntrada(this.formulario.value)

  }
}
