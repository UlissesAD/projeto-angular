import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaDetalheComponent } from './dia-detalhe.component';

describe('DiaDetalheComponent', () => {
  let component: DiaDetalheComponent;
  let fixture: ComponentFixture<DiaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaDetalheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
