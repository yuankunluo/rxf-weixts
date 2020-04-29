import { TestBed } from '@angular/core/testing';

import { PresentToastService } from './presentToast.service';

describe('PresentToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentToastService = TestBed.get(PresentToastService);
    expect(service).toBeTruthy();
  });
});
