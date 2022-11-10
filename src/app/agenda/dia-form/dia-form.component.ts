import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { agendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@Component({
  selector: 'dia-form',
  templateUrl: './dia-form.component.html',
  styleUrls: ['./dia-form.component.css']
})
export class DiaFormComponent implements OnInit {

  //MUDAR: FAZER RECEBER UMA VARIAVEL QUE REPRESENTA UM METODO PODENDO SER POST,PUT,DELETE

  form: FormGroup;
  submitted: boolean = false;
  inscricao: Subscription;
  editar: boolean
  tarefaID: any;
  DiaID: any;

  constructor(
    private formBuilder: FormBuilder,
    private agendaService: agendaService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup([])
    this.inscricao = Subscription.EMPTY
    this.editar = false
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        if (params['tarefaID']) {
          this.editar = true
          this.tarefaID = params['tarefaID']
        } else
          this.editar = false
          this.DiaID = params['id']
      }

    );
    if (!this.editar) {
      this.form = this.formBuilder.group({
        titulo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        periodo: [null, [Validators.required]],//CUSTOM parametrizar o periodo
      })
    } else {
      this.form = this.formBuilder.group({
        titulo: [null, [, Validators.minLength(3), Validators.maxLength(30)]],
        periodo: [null,],//CUSTOM parametrizar o periodo
      })
    }

  }

  hasError(field: string) {
    return this.form.get(field)?.errors
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      if (this.editar)
        this.agendaService.putTarefaDia(this.form.value, this.tarefaID)
      else
        this.agendaService.postTarefaDia(this.form.value, this.DiaID)
      //this.router.navigate(['agenda'])
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }


}
