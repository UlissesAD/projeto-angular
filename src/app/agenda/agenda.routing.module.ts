import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { agendaComponent } from './agenda.component';
import { DiaDetalheComponent } from './dia-detalhe/dia-detalhe.component';
import { DiaFormComponent } from './dia-form/dia-form.component';

const agendaRoutes: Routes = [
    {
        path: '', component: agendaComponent,
        children: [
            { path: ':id/novo', component: DiaFormComponent },
            { path: ':tarefaID/editar', component: DiaFormComponent },
            { path: ':id', component: DiaDetalheComponent },
            
        ],
        //canDeactivate:[DeactivateGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(agendaRoutes)],
    exports: [RouterModule]
})
export class AgendaRoutingModule { }
