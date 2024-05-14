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
  slides = [
    { image: './../../../../assets/img/Tarjetas.png' },
    { image: './../../../../assets/img/Volantes.png' },
    { image: "./../../../../assets/img/Sellos.png" },
    { image: "./../../../../assets/img/Posillos.png" },
    { image: "./../../../../assets/img/Cuadernos.png" },
    { image: "./../../../../assets/img/Brochures.png" },

  ];
  constructor() { }

  ngOnInit(): void {
   
  }
  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

}
