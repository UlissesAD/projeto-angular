import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tarefaDiaria } from './Tarefa';
import { environment } from './../../environments/environment';
import { Agenda } from './Agenda';

@Injectable({
  providedIn: 'root'
})
export class agendaService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = `${environment.API}agenda/`
  private readonly DiaAPI = `${environment.API}agenda/`
  private readonly TarefaAPI = `${environment.API}TarefasDiarias/`

  getAgenda() {
    return this.httpClient.get<Agenda[]>(this.DiaAPI)
  }

  getTarefasDia() {
    return this.httpClient.get<tarefaDiaria[]>(this.TarefaAPI)
  }
  getTarefaDia(id: string) {
    return this.httpClient.get<Agenda>(this.TarefaAPI + id)
  }

  postTarefaDia(novaTarefa: tarefaDiaria, DiaID: string) {
    console.log("POST:", novaTarefa, "DIA:", DiaID);
  }

  putTarefaDia(tarefaEditada: tarefaDiaria, TarefaID: string) {
    console.log("PUT:", tarefaEditada, "TAREFA:", TarefaID);

  }
  deleteTarefaDia(TarefaID: number) {
    console.log("DELETE:", TarefaID);
  }

}
