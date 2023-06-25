import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntradasService } from 'src/app/services/entradas.service';
import { Entrada } from 'src/app/interfaces/entradas.interface';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.css']
})
export class PlannerComponent {

  entradas: Entrada[]

  entradasService = inject(EntradasService)
  activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.entradas = []
  }

  ngOnInit() {
    this.entradas = this.entradasService.getAll()
  }

  getAllEntradas() {
    this.entradas = this.entradasService.getAll()
    console.log(this.entradas)
  }

}
