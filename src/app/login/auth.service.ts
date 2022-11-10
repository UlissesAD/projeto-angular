import { map, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Injectable, EventEmitter } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  private readonly API = `${environment.API}users/`
  private sub: Subscription;
  mostraMenuEmitter = new EventEmitter<boolean>();

  fazerLogin(usuario: Usuario) {
    
    //buscar nos dados
    this.validateUser()
    //if (usuario.nome === 'usuario@email.com' && usuario.senha === '123') {
      this.usuarioAutenticado = true
      this.mostraMenuEmitter.emit(true)
      this.router.navigate(['/'])/*
    } else {
      this.usuarioAutenticado = false
      this.mostraMenuEmitter.emit(false)
      //notificação de usuario não encontrado
    }
   */
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }

  fazerLogOut() {
    if (this.usuarioAutenticado = true) {
      this.usuarioAutenticado = false
      this.mostraMenuEmitter.emit(false)
      this.router.navigate(['/login'])
    }
  }

  getUser() {
    return this.httpClient.get<Usuario[]>(this.API)
  }

  validateUser() {
   
  }

  constructor(
    private router: Router,
    private httpClient: HttpClient

  ) { this.sub = Subscription.EMPTY }
}
