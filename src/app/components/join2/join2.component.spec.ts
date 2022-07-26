import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Join2Component } from './join2.component';

describe('Join2Component', () => {
  let component: Join2Component;
  let fixture: ComponentFixture<Join2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Join2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Join2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
