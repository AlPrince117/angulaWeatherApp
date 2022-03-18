import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-today-weather-component',
  templateUrl: './today-weather-component.component.html',
  styleUrls: ['./today-weather-component.component.css']
})
export class TodayWeatherComponentComponent implements OnInit {

  WeatherData: any;
  constructor() { }

  showDegree:boolean = false;
  showFahrenheit: boolean = true;

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  toggleTag(){
    this.showDegree= !this.showDegree
    this.showFahrenheit = !this.showFahrenheit
  }

  getWeatherData(){
    let data = JSON.parse('{"coord":{"lon":-0.14,"lat":5.67},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":301.22,"feels_like":304.66,"temp_min":301.22,"temp_max":301.22,"pressure":1010,"humidity":75,"sea_level":1010,"grnd_level":1003},"visibility":10000,"wind":{"speed":4.11,"deg":267,"gust":4.83},"clouds":{"all":96},"dt":1647590908,"sys":{"country":"GH","sunrise":1647583544,"sunset":1647627098},"timezone":0,"id":2298330,"name":"Medina Estates","cod":200}')
    this.setWeatherData(data);
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    let currentDate = new Date();
    this.WeatherData.temp_main_celcius = (this.WeatherData.main.temp -273.15).toFixed(0);
    this.WeatherData.temp_main_fahrenheit = (this.WeatherData.temp_main_celcius * 9/5) + 32;
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like -273.15).toFixed(0);
    this.WeatherData.temp_feels_like_fahrenheit = (this.WeatherData.temp_feels_like * 9/5) + 32;
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_min_fahrenheit = ((this.WeatherData.temp_min * 9/5) + 32).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_max_fahrenheit = ((this.WeatherData.temp_max * 9/5) + 32).toFixed(0);
    this.WeatherData.location = this.WeatherData.name;
  }

}
