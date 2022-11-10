import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaDiariaComponent } from './tarefa-diaria.component';

describe('TarefaDiariaComponent', () => {
  let component: TarefaDiariaComponent;
  let fixture: ComponentFixture<TarefaDiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefaDiariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
