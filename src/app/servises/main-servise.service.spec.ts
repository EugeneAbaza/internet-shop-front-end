import { TestBed, inject } from '@angular/core/testing';

import { MainServiseService } from './main-servise.service';

describe('MainServiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainServiseService]
    });
  });

  it('should ...', inject([MainServiseService], (service: MainServiseService) => {
    expect(service).toBeTruthy();
  }));
});
