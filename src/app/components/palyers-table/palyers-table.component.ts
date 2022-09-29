import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-palyers-table',
  templateUrl: './palyers-table.component.html',
  styleUrls: ['./palyers-table.component.css']
})
export class PalyersTableComponent implements OnInit {
   players:any=[];
   constructor(private router: Router,private playerService:PlayerService) { }

  ngOnInit() {
  //  this.players=[
  //    {id:"1",name:"Messi", age:"35", position:"Def", number:"1"},
  //    {id:"2",name:"Msakni", age:"30", position:"Def", number:"3"},
  //    {id:"3",name:"Maaloul", age:"28", position:"Def", number:"8"}

  // ];
 this.playerService.getAllPlayers().subscribe(
   data=>{this.players=data.players
   console.log(data.players)
  }
 )
  }
  goToDisplay(id:number){
  this.router.navigate([`playerInfo/${id}`]);
  }
  goToEdit(id:number){
    this.router.navigate([`editPlayer/${id}`]); 
  }
  deletePlayer(id){
    this.playerService.deletePlayerById(id).subscribe(
      data=>{console.log("hi");})
  
  }
}
