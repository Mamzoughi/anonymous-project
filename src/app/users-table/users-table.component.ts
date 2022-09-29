import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  users:any=[];
  constructor(private userService:UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      data=>{this.users=data.users}
    )
  }
  deleteUserById(id){
    this.userService.deleteUser(id).subscribe(
      data=>{console.log(data.msg)
        this.router.navigate(["/admin"]);
      }
    );
  }

}
