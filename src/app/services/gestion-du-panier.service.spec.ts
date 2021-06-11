import { TestBed } from '@angular/core/testing';

import { GestionDuPanierService } from './gestion-du-panier.service';

describe('GestionDuPanierService', () => {
  let service: GestionDuPanierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionDuPanierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
