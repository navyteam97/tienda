import { TestBed } from '@angular/core/testing';

import { YokoService } from './yoko.service';

describe('YokoService', () => {
  let service: YokoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YokoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
