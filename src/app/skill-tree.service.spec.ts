import { TestBed } from '@angular/core/testing';

import { SkillTreeServiceService } from './skill-tree-service.service';

describe('SkillTreeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillTreeServiceService = TestBed.get(SkillTreeServiceService);
    expect(service).toBeTruthy();
  });
});
