import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaFormComponent } from './dia-form.component';

describe('ListaFormComponent', () => {
  let component: DiaFormComponent;
  let fixture: ComponentFixture<DiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
