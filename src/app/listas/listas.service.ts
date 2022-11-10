import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  private listas: any[] = [
    {
      id: 1, nome: 'To-Do', totalItens: 2, itens:[
        { id: 0, nome: 'Tarefa de PCD' },
      ]
      


    },
    { id: 2, nome: 'Later', totalItens: 7 },
    { id: 3, nome: 'Não Esquecer', totalItens: 6 },
  ];

  constructor() { }

  getListas() {
    return this.listas
  }

  getLista(id: number) {
    let listas = this.getListas()
    for (let item of listas) {
      if (item.id == id) {
        return item;
      }
    }
    return null;
  }
}
