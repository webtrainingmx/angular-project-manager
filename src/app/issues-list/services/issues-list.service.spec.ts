import { TestBed, inject } from '@angular/core/testing';

import { IssuesListService } from './issues-list.service';

describe('IssuesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IssuesListService]
    });
  });

  it('should ...', inject([IssuesListService], (service: IssuesListService) => {
    expect(service).toBeTruthy();
  }));
});
