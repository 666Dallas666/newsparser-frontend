/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShownewsService } from './Shownews.service';

describe('Service: Shownews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShownewsService]
    });
  });

  it('should ...', inject([ShownewsService], (service: ShownewsService) => {
    expect(service).toBeTruthy();
  }));
});
