import { Component, OnInit } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  mostrarMenu: boolean = false

  constructor(private authService: AuthService){

  }
  fazerLogOut(){
    this.authService.fazerLogOut()
  }

  ngOnInit(): void {
    this.authService.mostraMenuEmitter.subscribe(
      (mostrar)=>{
        this.mostrarMenu=mostrar
      }
    );
  }
}
