import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { MatchFormComponent } from '../match-form/match-form.component';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  y:string="Match Info";
  matchId: any;
  matches:any=[];
  findedMatch: any={};
  constructor(private activatedRourte: ActivatedRoute, private matchService: MatchService ) { }

  ngOnInit() {
    // this.matches = [
    //   { id: 1, scoreOne: 1, scoreTwo:2, teamOne: "RMD", teamTwo: "FCB" },
    //   { id: 2, scoreOne: 2, scoreTwo: 0, teamOne: "SEV", teamTwo: "ATM" },
    //   { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "JUV", teamTwo: "TNT" },
    //   { id: 4, scoreOne: 0, scoreTwo: 3, teamOne: "AC", teamTwo: "ROM" }
    // ];
    // capturer la route active à travers snapshot et recuperer l'id ( comme il est défini dans le path dans app routing)
    this.  matchId = this.activatedRourte.snapshot.paramMap.get("id");
    // methode avancée afin de parcourir un tableau et chercher l'élément
   
     this.matchService.getMatchById(this.matchId).subscribe(
       data=>{this.findedMatch=data.obj}
     );
  }
  

}
