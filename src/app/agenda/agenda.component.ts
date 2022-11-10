import { Component, OnInit } from '@angular/core';

import { agendaService } from './agenda.service';
import { Agenda } from './Agenda';
import { catchError, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class agendaComponent implements OnInit {

  Lista$: Observable<Agenda[]>
  error$: Subject<boolean>
  Materialize: any;

  constructor(
    private agendaService: agendaService
  ) { 
    this.Lista$ = new Observable<Agenda[]>;
    this.error$ = new Subject<boolean>;
  }
  ngOnInit(): void {
    this.onRefresh()
  }

  onRefresh() {
    this.error$.next(false)
    this.Lista$ = this.agendaService.getAgenda().pipe(
      catchError((error) => {
        this.error$.next(true)
        return of();
      }
      )
    )
  }
}
