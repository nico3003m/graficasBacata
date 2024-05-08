import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  router: any;

  constructor(router:Router) {
    this.router = router;

   }

  ngOnInit(): void {3
  const correo = 'servicliente@graficasbacata.com.co'
  }

  navigate(path:string){
    this.router.navigate([path])
  }
}
