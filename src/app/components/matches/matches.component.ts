import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { MatchService } from "src/app/services/match.service";

@Component({
  selector: "app-matches",
  templateUrl: "./matches.component.html",
  styleUrls: ["./matches.component.css"],
})
export class MatchesComponent implements OnInit {
  matches: any = [];

  search:any;
  result:any;
  path:string;
  searchForm:FormGroup;
  searchOne:any={};
  constructor( private router: Router, private matchService: MatchService) {}

  ngOnInit() {
   
    this.matchService.getAllMatches().subscribe(
     data=> {
        this.matches=data.match;
           });
    // this.search=JSON.parse(localStorage.getItem("search"));
    this.path= this.router.url;
   
  
  
  }
  searching(){
    this.router.navigate([`allMatches`]);
    this.matchService.getMatch(this.search).subscribe(
      data=>{this.matches=data.matchs
       
      });
  }
  update(x) {
    this.matches = x;
  }

}
