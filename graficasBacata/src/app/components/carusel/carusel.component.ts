import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css']
})
export class CaruselComponent implements OnInit {
  img: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.img[0] = "./../../../../assets/img/Mision.jpg"
    this.img[1] = "./../../../../assets/img/objetivo.png"
  }

}
