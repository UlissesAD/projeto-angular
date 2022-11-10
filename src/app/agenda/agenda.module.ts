import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiaDetalheComponent } from './dia-detalhe/dia-detalhe.component';
import { agendaService } from './agenda.service';
import { AgendaRoutingModule } from './agenda.routing.module';
import { agendaComponent } from './agenda.component';
import { TarefaDiariaComponent } from './tarefa-diaria/tarefa-diaria.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiaFormComponent } from './dia-form/dia-form.component';

@NgModule({
  declarations: [
    agendaComponent,
    DiaDetalheComponent,
    TarefaDiariaComponent,
    DiaFormComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    agendaComponent
  ],
  providers: [
    agendaService
  ]

})
export class AgendaModule { }
