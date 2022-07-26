import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifcationSettingsComponent } from './notifcation-settings.component';

describe('NotifcationSettingsComponent', () => {
  let component: NotifcationSettingsComponent;
  let fixture: ComponentFixture<NotifcationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotifcationSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotifcationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
