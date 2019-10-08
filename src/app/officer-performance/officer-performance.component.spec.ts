import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerPerformanceComponent } from './officer-performance.component';

describe('OfficerPerformanceComponent', () => {
  let component: OfficerPerformanceComponent;
  let fixture: ComponentFixture<OfficerPerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerPerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
