import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherWeatherWidgetComponent } from './other-weather-widget.component';

describe('OtherWeatherWidgetComponent', () => {
  let component: OtherWeatherWidgetComponent;
  let fixture: ComponentFixture<OtherWeatherWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherWeatherWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherWeatherWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
