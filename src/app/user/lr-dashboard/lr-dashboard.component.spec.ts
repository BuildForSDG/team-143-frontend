import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LrDashboardComponent } from './lr-dashboard.component';

describe('LrDashboardComponent', () => {
  let component: LrDashboardComponent;
  let fixture: ComponentFixture<LrDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LrDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
