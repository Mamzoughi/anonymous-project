import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerUrl:string="http://localhost:3000/players"
  constructor(private httpClient : HttpClient) { }

addPlayer(obj, img:File){
  let formData= new FormData();
  formData.append('name',obj.name ) ;
  formData.append('position',obj.position ) ;
  formData.append('age',obj.age ) ;
  formData.append('number',obj.number) ;
  formData.append('img', img) ;
  return this.httpClient.post<{msg:string}>(this.playerUrl,formData);}
  // requete pour reccupérer tout les objets de matchUrl(BackEnd)
getAllPlayers(){
  return this.httpClient.get<{players:any}>(this.playerUrl);
}
// requete pour reccupérer un objet par son  Id de matchUrl(BackEnd)
getPlayerById(id){
  return this.httpClient.get<{player:any}>(`${this.playerUrl}/${id}`);
}
// requete pour supprimer un objet de matchUrl(BackEnd)
deletePlayerById(id){
  return this.httpClient.delete<{msg:string}>(`${this.playerUrl}/${id}`);
}
updatePlayer( obj){
  
  return this.httpClient.put<{msg:string}>(`${this.playerUrl}/${obj._id}`,obj);
}
}