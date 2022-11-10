import { TestBed } from '@angular/core/testing';

import { agendaService } from './agenda.service';

describe('agendaService', () => {
  let service: agendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(agendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
