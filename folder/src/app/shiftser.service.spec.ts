import { TestBed } from '@angular/core/testing';

import { ShiftserService } from './shiftser.service';

describe('ShiftserService', () => {
  let service: ShiftserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShiftserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
