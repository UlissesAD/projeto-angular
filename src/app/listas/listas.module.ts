import { ListasRoutingModule } from './listas.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasComponent } from './listas.component';
import { ListaFormComponent } from './lista-form/lista-form.component';
import { ListaDetalheComponent } from './lista-detalhe/lista-detalhe.component';
import { ListasService } from './listas.service';

@NgModule({
  declarations: [
    ListasComponent,
    ListaDetalheComponent,
    ListaFormComponent
  ],
  imports: [
    CommonModule,
    ListasRoutingModule
  ],
  exports: [
    ListasComponent
  ],
  providers:[
    ListasService
  ]
})
export class ListasModule { }
