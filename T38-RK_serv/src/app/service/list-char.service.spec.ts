import { TestBed } from '@angular/core/testing';

import { ListCharService } from './list-char.service';

describe('ListCharService', () => {
  let service: ListCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
