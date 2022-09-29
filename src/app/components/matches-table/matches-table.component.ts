import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches:any=[];
  searchForm:FormGroup;
  pageOfItems: Array<any>;
  search:any={};
  constructor( private router : Router , private matchService: MatchService) { }

  ngOnInit() {
  //   this.matches=[{id:"1",score1:"50", score2:"100", team1:"RMD", team2:"FCB"},
  //  {id:"2",score1:"50", score2:"100", team1:"RMD", team2:"FCB"},
  //  {id:"3",score1:"50", score2:"100", team1:"RMD", team2:"FCB"} 
  // ];
  this.allMatches();
  }
 goToDisplay(x: number){
   this.router.navigate([`matchInfo/${x}`]);
 }
 goToEdit(x: number){
  this.router.navigate([`edit/${x}`]);
}
deleteMatchById(x){
  this.matchService.deleteMatchById(x).subscribe(
    data=>{console.log(data.msg)
      this.allMatches();
    }
   
  );
  
}
allMatches(){
  this.matchService.getAllMatches().subscribe((response)=>{this.matches=response.match;});
}

searching(){
 
  // alert(this.search.match)
  // this.matchService.getMatchByName(this.search).subscribe(
    
   
  // }
  // );
  
}

// onChangePage(pageOfItems: Array<any>) {
//   // update current page of items
//   this.pageOfItems =pageOfItems;
// }
}
