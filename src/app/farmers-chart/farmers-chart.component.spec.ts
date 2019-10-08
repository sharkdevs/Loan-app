import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmersChartComponent } from './farmers-chart.component';

describe('FarmersChartComponent', () => {
  let component: FarmersChartComponent;
  let fixture: ComponentFixture<FarmersChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
