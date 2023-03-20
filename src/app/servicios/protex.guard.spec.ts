import { TestBed } from '@angular/core/testing';

import { ProtexGuard } from './protex.guard';

describe('ProtexGuard', () => {
  let guard: ProtexGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtexGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
