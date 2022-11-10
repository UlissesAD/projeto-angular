import { ListaDetalheComponent } from './lista-detalhe/lista-detalhe.component';
import { ListaFormComponent } from './lista-form/lista-form.component';
import { ListasComponent } from './listas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const ListaRoutes: Routes = [
    {
        path: '', component: ListasComponent,
        children: [
            { path: 'novo', component: ListaFormComponent },
            { path: ':id', component: ListaDetalheComponent },
            { path: ':id/editar', component: ListaFormComponent }
        ],
        //canDeactivate:[DeactivateGuard]
    },

];

@NgModule({
    imports: [RouterModule.forChild(ListaRoutes)],
    exports: [RouterModule]
})
export class ListasRoutingModule { }
