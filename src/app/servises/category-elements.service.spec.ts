import { TestBed, inject } from '@angular/core/testing';

import { CategoryElementsService } from './category-elements.service';

describe('CategoryElementsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoryElementsService]
    });
  });

  it('should ...', inject([CategoryElementsService], (service: CategoryElementsService) => {
    expect(service).toBeTruthy();
  }));
});
