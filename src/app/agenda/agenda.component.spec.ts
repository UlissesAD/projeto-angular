import { ComponentFixture, TestBed } from '@angular/core/testing';

import { agendaComponent } from './agenda.component';

describe('AgendaComponent', () => {
  let component: agendaComponent;
  let fixture: ComponentFixture<agendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ agendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(agendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
