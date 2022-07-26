import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Join1Component } from './join1.component';

describe('Join1Component', () => {
  let component: Join1Component;
  let fixture: ComponentFixture<Join1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Join1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Join1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
