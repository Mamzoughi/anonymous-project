import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  createDb(){

    let  matches = [ { id: 1, scoreOne: 1, scoreTwo:2, teamOne: "RMD", teamTwo: "FCB" },
      { id: 2, scoreOne: 2, scoreTwo: 0, teamOne: "SEV", teamTwo: "ATM" },
      { id: 3, scoreOne: 1, scoreTwo: 1, teamOne: "JUV", teamTwo: "TNT" },
      { id: 4, scoreOne: 0, scoreTwo: 3, teamOne: "AC", teamTwo: "ROM" }
     ];

 
    

    let  players= [
     {id:"1",name:"Messi", age:"35", position:"Def", number:"1"},
     {id:"2",name:"Msakni", age:"30", position:"Def", number:"3"},
     {id:"3",name:"Maaloul", age:"28", position:"Def", number:"8"}

  ];
  return {matches, players};
   
   }
}
