import { ListasService } from './listas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  lista: any;

  constructor(
    private listaService: ListasService
  ) { }

  ngOnInit(): void {
      this.lista = this.listaService.getListas();
  }

}
