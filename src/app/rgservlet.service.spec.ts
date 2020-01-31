import { TestBed } from '@angular/core/testing';

import { RgservletService } from './rgservlet.service';

describe('RgservletService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RgservletService = TestBed.get(RgservletService);
    expect(service).toBeTruthy();
  });
});
