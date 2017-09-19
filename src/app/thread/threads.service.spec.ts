import { TestBed, inject } from '@angular/core/testing';

import { ThreadService } from './threads.service';

describe('ThreadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThreadService]
    });
  });

  it('should be created', inject([ThreadService], (service: ThreadService) => {
    expect(service).toBeTruthy();
  }));
});
