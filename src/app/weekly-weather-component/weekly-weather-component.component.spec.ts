import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyWeatherComponentComponent } from './weekly-weather-component.component';

describe('WeeklyWeatherComponentComponent', () => {
  let component: WeeklyWeatherComponentComponent;
  let fixture: ComponentFixture<WeeklyWeatherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyWeatherComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyWeatherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
