import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { TeamService } from "src/app/services/team.service";
import { JwPaginationModule } from "jw-angular-pagination";


@Component({
  selector: "app-teams-table",
  templateUrl: "./teams-table.component.html",
  styleUrls: ["./teams-table.component.css"],
})
export class TeamsTableComponent implements OnInit {
  path: string;
  searchForm: FormGroup;
  search: any = {};
  teams: any = [];
  isDisplayed: boolean = false;
  result: any;
  msg: string;
  teamsTab: any = [];
  items = [];
  pageOfItems: Array<any>;

  constructor(private route: Router, private teamService: TeamService) {}

  ngOnInit() {
    this.path = this.route.url;
    if (this.path == "/admin") {
      this.isDisplayed = true;
    }
    // this.teams=[{id:1,name:"FCB",stadium:"Camp New", foundation:"1988", owner:"Salah Maki"},
    // {id:2,name:"RMD",stadium:"Bernabeu", foundation:"1990", owner:"Ali Maki"},
    // {id:3,name:"JUV",stadium:"Arena", foundation:"1867", owner:"Med Maki"}];
    // if(this.path=="/allTeams/search"){
    //   this.teams=this.result;
    // }
   this.teamService.getAllTeams().subscribe(
     data=>{this.teams=data.teams}
   )
  }
  goToDisplay(id: number) {
    this.route.navigate([`teamsInfo/${id}`]);
  }
  deleteTeam(id){
    this.teamService.deleteTeamById(id).subscribe();
  }

  searching() {
    // this.teamService.getAllTeams().subscribe(
    //   data=>{this.teams=data.teams}
    // )
    alert(this.search.team);
    this.teamService.getTeamByName(this.search).subscribe((data) => {
      console.log("it's ok");
      this.teams = data.findedTeam;
      console.log(this.teams);
    });
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }
}
