import { AuthService } from './../login/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authServie: AuthService,
    private router: Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | Observable<boolean> {
    //console.log(this.authServie.usuarioEstaAutenticado())
    if (this.authServie.usuarioEstaAutenticado())
      return true

    this.router.navigate(['/login'])
    return false
  }
}
