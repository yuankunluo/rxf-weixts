import { TestBed } from '@angular/core/testing';

import { PresentAlertService } from './presentAlert.service';

describe('PresentAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentAlertService = TestBed.get(PresentAlertService);
    expect(service).toBeTruthy();
  });
});
