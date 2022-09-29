import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl:string="http://localhost:3000/weather";
  constructor(private httpClient: HttpClient) { }
getValue(obj){
  return this.httpClient.post(this.weatherUrl,obj);
}
getValuePost(obj){
  return this.httpClient.post<{result:any}>(`${this.weatherUrl}/search`,obj);
}
}
