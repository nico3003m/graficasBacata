import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class nosotrosComponent implements OnInit {
  img: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.img[0] = "./../../../../assets/img/Mision.jpg"
  }

}
