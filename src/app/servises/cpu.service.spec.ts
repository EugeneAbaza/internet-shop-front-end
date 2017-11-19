import { TestBed, inject } from '@angular/core/testing';

import { CpuService } from './cpu.service';

describe('CpuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CpuService]
    });
  });

  it('should ...', inject([CpuService], (service: CpuService) => {
    expect(service).toBeTruthy();
  }));
});
