import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodayWeatherComponentComponent } from './today-weather-component/today-weather-component.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { WeeklyWeatherComponentComponent } from './weekly-weather-component/weekly-weather-component.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { OtherWeatherWidgetComponent } from './other-weather-widget/other-weather-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayWeatherComponentComponent,
    NavComponentComponent,
    WeeklyWeatherComponentComponent,
    HeaderTopComponent,
    OtherWeatherWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
