import { TestBed } from '@angular/core/testing';

import { ComponentContextService } from './component-context.service';

describe('ComponentContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentContextService = TestBed.get(ComponentContextService);
    expect(service).toBeTruthy();
  });
});
