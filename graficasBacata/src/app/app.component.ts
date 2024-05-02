import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'graficasBacata';
  img: string[] = [];
    
  constructor() { }
  
  ngOnInit(): void {
    this.img[0] = "./../assets/img/mensajes.png";
    this.img[1] = "./../assets/img/whatsapp.svg";
  }
}
  