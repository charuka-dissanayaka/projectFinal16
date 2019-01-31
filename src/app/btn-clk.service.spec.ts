import { TestBed, inject } from '@angular/core/testing';

import { BtnClkService } from './btn-clk.service';

describe('BtnClkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BtnClkService]
    });
  });

  it('should be created', inject([BtnClkService], (service: BtnClkService) => {
    expect(service).toBeTruthy();
  }));
});
