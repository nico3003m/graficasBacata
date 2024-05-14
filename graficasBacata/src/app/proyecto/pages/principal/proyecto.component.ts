import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
img :string[]=[]

  constructor() { }

  ngOnInit(): void {
    this.img[0] = "./../../../../assets/img/Tarjetas.png"
  }

}
