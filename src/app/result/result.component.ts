import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatchService } from '../services/match.service';

import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input()X:any;
  @Output() newMatches: EventEmitter<any>= new EventEmitter();
  constructor( private teamService: TeamService, private matchService: MatchService) { }

  ngOnInit() {
 
  }
scoreResult(a,b){
  if(a<b){return "red"}
  else if(a>b){return "green"}
  else {return "blue"}
}
deleteMatch(id){
  this.matchService.deleteMatchById(id).subscribe(
    data=>{ 
      this.matchService.getAllMatches().subscribe(

      data=>{this.newMatches.emit(data.match) })
})
}

}
