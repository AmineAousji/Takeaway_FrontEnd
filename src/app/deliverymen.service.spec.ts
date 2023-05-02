import { TestBed } from '@angular/core/testing';

import { DeliverymenService } from './deliverymen.service';

describe('DeliverymenService', () => {
  let service: DeliverymenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliverymenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
