import { ActivatedRoute, Router } from '@angular/router';
import { ListasService } from './../listas.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-detalhe',
  templateUrl: './lista-detalhe.component.html',
  styleUrls: ['./lista-detalhe.component.css']
})
export class ListaDetalheComponent implements OnInit {
  lista: any;
  inscricao: Subscription;

  constructor(
    private listasService: ListasService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscricao = Subscription.EMPTY
  }
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']
        this.lista = this.listasService.getLista(id);
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editar() {
    this.router.navigate(['listas', this.lista.id, 'editar'])
  }


}