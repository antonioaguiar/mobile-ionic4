import { TestBed } from '@angular/core/testing';

import { HematitaService } from './hematita.service';

describe('HematitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HematitaService = TestBed.get(HematitaService);
    expect(service).toBeTruthy();
  });
});
