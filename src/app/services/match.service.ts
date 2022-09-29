import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
 matchUrl:string="http://localhost:3000/matches";
// matchUrl:string="api/matches"
    
  constructor( private httpClient : HttpClient) { }

  addMatch(obj){
    return this.httpClient.post<{msg:any}>(this.matchUrl,obj);}
  
  getAllMatches(){
    return this.httpClient.get<{match:any}>(this.matchUrl);
  }

  getMatchById(id){
    return this.httpClient.get<{obj:any}>(`${this.matchUrl}/${id}`);
  }

  deleteMatchById(id){
    return this.httpClient.delete<{msg:any}>(`${this.matchUrl}/${id}`);
  }
  updateMatch( obj){
    return this.httpClient.put<{msg:any}>(`${this.matchUrl}/${obj._id}`,obj);
  }
  // searchMatch(obj){
  //   // return this.httpClient.get(`{this.matchUrl}/${obj}`);
  //   return this.httpClient.post(`${this.matchUrl}/search`,obj);
  // }
  getMatch(obj){
    return this.httpClient.post<{matchs:any}>(`${this.matchUrl}/search`, obj);
  }
  getMatchByName(){
    return 
  }
}
