import { TestBed } from '@angular/core/testing';

import {  HomeService } from './breakfast.service';

describe('BreakfastService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
