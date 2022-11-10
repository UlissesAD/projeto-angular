import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//wildcard e rota padrão


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'agenda',
    loadChildren: () => import('./agenda/agenda.module').then(m => m.AgendaModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'listas',
    loadChildren: () => import('./listas/listas.module').then(m => m.ListasModule),
    canActivate: [AuthGuard]
  },
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
