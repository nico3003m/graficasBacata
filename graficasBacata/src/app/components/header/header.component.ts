import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.menu();
  }

  navigate(info: string) {
    this.router.navigate([info]);
  }

  menu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    const menu = document.querySelector('.menu');
    if (menuToggle && menu) {
    
      menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
          menu.classList.add('active');
        } else {
          menu.classList.remove('active');
        }
      });
    }
  }

}
