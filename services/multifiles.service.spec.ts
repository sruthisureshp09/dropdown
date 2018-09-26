import { TestBed } from '@angular/core/testing';

import { MultifilesService } from './multifiles.service';

describe('MultifilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultifilesService = TestBed.get(MultifilesService);
    expect(service).toBeTruthy();
  });
});
