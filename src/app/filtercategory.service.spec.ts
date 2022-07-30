import { TestBed } from '@angular/core/testing';

import { FilterCategoryService } from './filtercategory.service';

describe('FilterCategoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterCategoryService = TestBed.get(FilterCategoryService);
    expect(service).toBeTruthy();
  });
});
