import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherComponentComponent } from './today-weather-component.component';

describe('TodayWeatherComponentComponent', () => {
  let component: TodayWeatherComponentComponent;
  let fixture: ComponentFixture<TodayWeatherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayWeatherComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
