import { TestBed } from '@angular/core/testing';

import { CryptoItemsService } from './crypto-items.service';

describe('CryptoItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptoItemsService = TestBed.get(CryptoItemsService);
    expect(service).toBeTruthy();
  });
});
