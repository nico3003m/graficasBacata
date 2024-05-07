import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;

  constructor(router:Router) {
    this.router =router
   }

  ngOnInit(): void {
    this.menu()
  }
  navigate(info:string) {
    this.router.navigate([info])
  }
  menu() {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    const menu = document.querySelector('.menu');
    menuToggle?.addEventListener('change', function () {
      if (menuToggle?.checked) {
        menu?.classList.add('active');
      } else {
        menu?.classList.remove('active');
      }
    });

  }

}
