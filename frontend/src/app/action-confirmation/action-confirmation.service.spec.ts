import { TestBed } from '@angular/core/testing';

import { ActionConfirmationService } from './action-confirmation.service';

describe('ActionConfirmationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionConfirmationService = TestBed.get(ActionConfirmationService);
    expect(service).toBeTruthy();
  });
});
