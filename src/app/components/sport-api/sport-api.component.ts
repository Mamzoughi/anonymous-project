import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-sport-api',
  templateUrl: './sport-api.component.html',
  styleUrls: ['./sport-api.component.css']
})
export class SportApiComponent implements OnInit {

  teamForm: FormGroup;
  countrie:string;
  teams:any=[];
  search:any={};
  pageOfItems: Array<any>;
  clicked:boolean=false;
  
  constructor(private teamsService: TeamService, private formBuilder: FormBuilder, private router:Router) {}

  ngOnInit() {


    }
 
  displayTeams() {
    this.clicked=true;
   this.teamsService.getTeamsApi(this.search.countrie).subscribe(
     data=>{
      
      this.teams= data.teams
      this.clicked=false;
     console.log("Here Teams",this.teams);
    }
   )
 
  }
  onChangePage(pageOfItems: Array<any>) {
    
    // update current page of items
    this.pageOfItems = pageOfItems;
  }


}
