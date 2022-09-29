import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { PlayersComponent } from './components/players/players.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { SearchWeatherComponent } from './components/search-weather/search-weather.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { SportApiComponent } from './components/sport-api/sport-api.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsComponent } from './components/teams/teams.component';


const routes: Routes = [
    // localhost:4200/ => la page home.component.html va s'afficher
    {path:"", component:HomeComponent},
    // localhost:4200/login => la page login.component.html va s'afficher
  {path:"login" , component:LoginComponent},
    // localhost:4200/signup => la page signup.component.html va s'afficher
   {path:"signup" , component:SignupComponent},
   
   {path:"player-form" , component:PlayerFormComponent},
   {path:"editPlayer/:id" , component:PlayerFormComponent},

   {path:"add-team" , component:AddTeamComponent},
   {path:"edit-team" , component:EditTeamComponent},
   {path:"allMatches" , component:MatchesComponent},
   {path:"allMatches/search" , component:MatchesComponent},
   {path:"allPlayers" , component:PlayersComponent},
   {path:"allTeams" , component:TeamsComponent},
   {path:"teams/:countrie" , component:TeamsComponent},
   {path:"admin" , component:AdminComponent},
   {path:"searchMatches", component:SearchComponent},
   {path:'matchInfo/:id', component:MatchInfoComponent},
   {path:'edit/:id', component:MatchFormComponent},
   {path:'addMatch', component:MatchFormComponent},
   {path:'playerInfo/:id', component:PlayerInfoComponent},
   {path:'teamsInfo/:id', component:TeamInfoComponent},
   {path:'searchByTeam', component:SearchMatchComponent},
   {path:'search', component:SearchWeatherComponent},
   {path:'searchTeams', component:SportApiComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
