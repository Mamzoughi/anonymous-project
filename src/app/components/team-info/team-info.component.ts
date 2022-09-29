import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  
  teams:any=[];
  teamId:any;
  findedTeam:any={};
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.teams=[{id:1,name:"FCB",stadium:"Camp New", foundation:"1988", owner:"Salah Maki"},
    {id:2,name:"RMD",stadium:"Bernabeu", foundation:"1990", owner:"Ali Maki"},
    {id:3,name:"JUV",stadium:"Arena", foundation:"1867", owner:"Med Maki"}];
    this.teamId=this.activatedRoute.snapshot.paramMap.get("id");
    this.findedTeam=this.teams.find( (obj) => {return obj.id == this.teamId} )
  }

}
