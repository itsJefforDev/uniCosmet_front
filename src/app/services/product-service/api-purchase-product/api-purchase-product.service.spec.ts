import { TestBed } from '@angular/core/testing';

import { ApiBuyProductService } from './api-purchase-product.service';

describe('ApiBuyProductService', () => {
  let service: ApiBuyProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBuyProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
