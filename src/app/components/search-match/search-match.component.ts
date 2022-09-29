import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-match',
  templateUrl: './search-match.component.html',
  styleUrls: ['./search-match.component.css']
})
export class SearchMatchComponent implements OnInit {
  searchForm:FormGroup;
  search:any={};
  
  msg:string;
  searchTab:any={};
  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  searching(x){
 
  this.router.navigate([`allMatches/search`]);
  }

}
