import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
urlTeams: string ="http://localhost:3000/teams";
  constructor(private httpClient: HttpClient) { }
getAllTeams(){
  return this.httpClient.get<{teams:any}>(this.urlTeams);
}
getTeamByName(searchObj){
return this.httpClient.post<{findedTeam:any}>(`${this.urlTeams}/search`, searchObj);
}
getTeamByNameTwo(name){
return this.httpClient.get<{findedTeam:any}>(`${this.urlTeams}/${name}`);
}
addTeam(obj){
  return this.httpClient.post<{msg:any}>(this.urlTeams,obj);
}
getTeamsApi(countries){
  return this.httpClient.get<{teams:any}>(`http://localhost:3000/soccer/${countries}`);
}
deleteTeamById(id){
  return this.httpClient.delete<{msg:any}>(`${this.urlTeams}/${id}`)
}
}
