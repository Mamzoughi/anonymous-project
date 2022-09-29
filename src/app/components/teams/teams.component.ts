import { Component, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { EventEmitter } from 'events';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
//  définition des variables sefait au dessus du constructor
// teams une variable de type any initialement un tableau vide
  teams: any=[];
  @Input() items: Array<any>;
  @Output() changePage = new EventEmitter();
  @Input() initialPage = 1;
  @Input() pageSize = 10;
  @Input() maxPages = 10;
  pageOfTeams: Array<any>;
  pager: any = {};
  

  constructor(private teamService: TeamService) { }
//  ngOnInit() est une methode qui s'execute automatiquement lors de l'appel du component à travers son selector
  ngOnInit() {
  
  this.teamService.getAllTeams().subscribe(
    response=>{ this.teams=response.teams
     console.log("Here Teams:", this.teams)
    });

  
 
  }
  ngOnChanges(changes: SimpleChanges) {
    // reset page if items array has changed
   
  }

  
}
  

