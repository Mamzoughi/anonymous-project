import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";

@Component({
  selector: "app-player-form",
  templateUrl: "./player-form.component.html",
  styleUrls: ["./player-form.component.css"],
})
export class PlayerFormComponent implements OnInit {
  title: string = "Add Player";
  player: any = {};
  p: FormGroup;
  playerId: any;
  players: any = [];
  imagePreview: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private playerService: PlayerService,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    this.p = this.builder.group({
      name: [""],
      age: [""],
      number: [""],
      position: [""],
      img: [""],
    });

    this.playerService.getAllPlayers().subscribe((data) => {
      this.players = data.players;
    });
    this.playerId = this.activatedRoute.snapshot.paramMap.get("id");
    if (this.playerId) {
      this.title = "Edit Player";
      this.playerService.getPlayerById(this.playerId).subscribe((data) => {
        this.player = data.player;
      });
    }
  }
  addPlayer() {
    if (this.playerId) {
      
      this.playerService.updatePlayer(this.player).subscribe((data) => {
        console.log(data.msg);
        this.router.navigate(["admin"]);
      });
    } else {
      console.log(this.p.value.img);
      this.playerService.addPlayer(this.player, this.p.value.img).subscribe((data) => {
        console.log(data.msg);
       
        
      });
    }
  }
  onImageSelected(event: Event) {
    // Creation d'une cont file contenent l'evenement selectionné
    const file = (event.target as HTMLInputElement).files[0];
    console.log("here file", file);
    this.p.patchValue({ img: file });
    this.p.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
}
