import { TestBed } from '@angular/core/testing';

import { FormProdutoService } from './form-produto.service';

describe('FormProdutoService', () => {
  let service: FormProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
