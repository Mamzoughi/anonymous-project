import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
   players:any=[];
  playerId:any={};
  findedPlayer:any;
  constructor(private activateRoute: ActivatedRoute, private playerService:PlayerService) { }

  ngOnInit() {
 
    this.playerId=this.activateRoute.snapshot.paramMap.get("id");
    this.playerService.getPlayerById(this.playerId).subscribe(
      data=>{}
    )
  }

}
