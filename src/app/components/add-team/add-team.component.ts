import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  teams:any=[];
  teamForm:FormGroup;
  team:any={};
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams=[{id:1,name:"FCB",stadium:"Camp New", foundation:"1988", owner:"Salah Maki"},
    {id:2,name:"RMD",stadium:"Bernabeu", foundation:"1990", owner:"Ali Maki"},
    {id:3,name:"JUV",stadium:"Arena", foundation:"1867", owner:"Med Maki"}];
  
  }
 addTeam(){
   this.teamService.addTeam(this.team).subscribe(
     data=>{console.log(data.msg)}
   )
 }
}
