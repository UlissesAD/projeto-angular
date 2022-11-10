import { tarefaDiaria } from './../Tarefa';
import { agendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'dia-detalhe',
  templateUrl: './dia-detalhe.component.html',
  styleUrls: ['./dia-detalhe.component.css']
})
export class DiaDetalheComponent implements OnInit {

  inscricao: Subscription;
  tarefasDia: tarefaDiaria[]
  DiaID: number

  constructor(
    private agendaService: agendaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.inscricao = Subscription.EMPTY
    this.tarefasDia = []
    this.DiaID = 0

  }
  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']
        this.DiaID = id
        this.onRefresh(parseInt(id))
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  novaTarefa() {
    this.router.navigate(['agenda', this.DiaID, 'novo'])
  }

  apagarTarefa(TarefaID: number) {
    this.agendaService.deleteTarefaDia(TarefaID)
  }

  onRefresh(id: number) {
    this.agendaService.getTarefasDia().subscribe(
      data => {
        this.tarefasDia = data.filter(data => data.dia == id)
      }
    )
  }
}
