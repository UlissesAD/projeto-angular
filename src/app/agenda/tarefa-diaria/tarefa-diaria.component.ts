import { Router } from '@angular/router';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'tarefa-diaria',
  templateUrl: './tarefa-diaria.component.html',
  styleUrls: ['./tarefa-diaria.component.css']
})
export class TarefaDiariaComponent implements OnInit {

  @Output() apagar = new EventEmitter();
  @Input() tarefa: any;
  @Input() marked: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  select() {
    (this.marked?  this.marked = false :  this.marked = true)
  }

  apagarTarefa() {
    this.apagar.emit(this.tarefa.id)
  }

  editarTarefa() {
    this.router.navigate(['agenda', this.tarefa.id, 'editar'])
  }

}
