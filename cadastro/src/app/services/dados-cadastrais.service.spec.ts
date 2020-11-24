import { TestBed } from '@angular/core/testing';

import { DadosCadastraisService } from './dados-cadastrais.service';

describe('DadosCadastraisService', () => {
  let service: DadosCadastraisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosCadastraisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
