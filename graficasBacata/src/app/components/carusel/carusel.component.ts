import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.css'],
  animations: [
    trigger('slideAnimation', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate('500ms ease-in-out', style({ transform: 'translateX(0)' }))
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class CaruselComponent implements OnInit {
  img: string[] = [];
  currentSlideIndex = 0;
  images = [
    './../../../../assets/img/Tarjetas.png',
    './../../../../assets/img/Volantes.png',
    './../../../../assets/img/Sellos.png',
    './../../../../assets/img/Posillos.png',
    './../../../../assets/img/Cuadernos.png',
    './../../../../assets/img/Brochures.png'
  ];
  constructor() { }

  ngOnInit(): void {
   
  }
  currentIndex = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

}
