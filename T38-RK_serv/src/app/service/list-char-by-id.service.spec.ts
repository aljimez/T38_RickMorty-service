import { TestBed } from '@angular/core/testing';

import { ListCharByIdService } from './list-char-by-id.service';

describe('ListCharByIdService', () => {
  let service: ListCharByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCharByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
