import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.menu()
  }

  menu(){
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    const menu = document.querySelector('.menu');
    menuToggle?.addEventListener('change', function() {
      if (menuToggle?.checked) {
          menu?.classList.add('active');
      } else {
          menu?.classList.remove('active');
      }
  });
  
  }
  
}
