import { TestBed } from '@angular/core/testing';

import { RetrieveDataService } from './retrieve-data.service';

describe('RetrieveDataService', () => {
  let service: RetrieveDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetrieveDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
