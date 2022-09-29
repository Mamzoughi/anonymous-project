import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  search:any={};
  searchForm:FormGroup;
  matches:any=[];
  constructor() { }

  ngOnInit() {
  this.matches=[
    { id: 1, scoreOne: 10, scoreTwo: 15, teamOne: "Esp", teamTwo: "Club" },
    { id: 2, scoreOne: 5, scoreTwo: 20, teamOne: "Css", teamTwo: "Etoile" },
  ];
  }
searching(){
 console.log(this.search.msg);
}
}
