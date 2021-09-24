import { TestBed } from '@angular/core/testing';

import { DatosSitiosService } from './datos-sitios.service';

describe('DatosSitiosService', () => {
  let service: DatosSitiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosSitiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
