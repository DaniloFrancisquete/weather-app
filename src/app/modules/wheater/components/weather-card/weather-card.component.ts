import { Component, Input, OnInit } from '@angular/core';
import { faDroplet, faTemperatureHalf, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: [],
})
export class WeatherCardComponent  {

  //Dados recebidos da previsão do tempo recebidos componente pai
  @Input() weatherDatasInput!: WeatherDatas;

  minTemperatureIcon = faTemperatureLow;
  maxTempratureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;



  }

