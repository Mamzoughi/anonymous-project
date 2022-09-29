import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // défiintion de l'objet qui va contenir les attributs email et password
  user: any={};
  // la réference du formulaire
  loginForm:FormGroup;

  // source:string;
  // // etape1
  // user:any={};
  // // etape2
  // loginForm:FormGroup;
  // constructor(private formBuilder : FormBuilder) { }
  constructor(private userService:UserService){}
  ngOnInit() {

 
   // this.source="assets/images/logo_4.png"
    // console.log("Test");
    // // déclaration d'une variable locale
    // let source;
    // // etape4 Creation et initialisation des inputs dans le FormGroup
    // this.loginForm= this.formBuilder.group({email:[""], password:[""]})
    }
// clickMe(){ alert("Hello")}
   // etape5
login(){
  this.userService.login(this.user).subscribe(
    data=>{console.log(data.msg)
    }
  );
}
}
