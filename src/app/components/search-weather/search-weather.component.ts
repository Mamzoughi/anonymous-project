import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-search-weather',
  templateUrl: './search-weather.component.html',
  styleUrls: ['./search-weather.component.css']
})
export class SearchWeatherComponent implements OnInit {
  searchForm:FormGroup;
  weatherResult:any;
  path:any;
  constructor(private formBuilder: FormBuilder, private weatherService: WeatherService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: [""]});
  }
  search(){
    this.weatherService.getValuePost(this.searchForm.value).subscribe
    (data=>{console.log(data.result)
     this.weatherResult=data.result;
     this.path=`https://openweathermap.org/img/w/${data.result.image}.png`
    }
    );
  }
}
