import { TestBed } from '@angular/core/testing';

import { CitatsServiceService } from './citats-service.service';

describe('CitatsServiceService', () => {
  let service: CitatsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitatsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
