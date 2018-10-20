import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsMasterComponent } from './skills-master.component';

describe('SkillsMasterComponent', () => {
  let component: SkillsMasterComponent;
  let fixture: ComponentFixture<SkillsMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
