import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  match:any={};
  m:FormGroup;
  matches:any=[];
  findedMatch:any;
  matchId: any={};
  title: string="Add Match";
  constructor(private activatedRoute: ActivatedRoute, private router:Router, private matchService: MatchService) { }

  ngOnInit() {
  //   this.matches=[ { id: 1, scoreOne: 1, scoreTwo:2, teamOne: "RMD", teamTwo: "FCB" },
  //   { id: 2, scoreOne: 2, scoreTwo: 0, teamOne: "SEV", teamTwo: "ATM" },
  //   { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "JUV", teamTwo: "TNT" },
  //   { id: 4, scoreOne: 0, scoreTwo: 3, teamOne: "AC", teamTwo: "ROM" }
  //  ];
   this.matchId = this.activatedRoute.snapshot.paramMap.get("id");
   if(this.matchId){
   this.matchService.getMatchById(this.matchId).subscribe(
  data=>{this.match=data.obj;});
   this.title="Edit Match";
   }
  
  }

 addOrEditMatch(){
   console.log(this.match);
   if (this.matchId){this.matchService.updateMatch(this.match).subscribe(
     data=>{console.log(data.msg)
     this.router.navigate([`admin/`])
    }
   )}
   else{this.matchService.addMatch(this.match).subscribe(
     data=>{
      console.log(data.msg)
      this.router.navigate([`admin/`])}
   )}
 }
}
