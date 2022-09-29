import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  test: Boolean = false;
  regex!: RegExp;
  validEmail:string;
  imagePreview:any;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router:Router) {}

  ngOnInit() {
    // creer des input et les affecter dans l'id du Form
    // creation des input à travers FormBuilder
   // this.regex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!$&*^]).+$/;
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$'),
          // Validators.minLength(8),
          // Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=.*[$@$!%*?&])(?=[^A-Z]*[A-Z]).{8,20}$/),
        ],
      ],
      img:[''],
    });
    this.test = true;
  }

  signup() {
   
  this.userService.signup(this.signupForm.value ,this.signupForm.value.img ).subscribe(
    data=>{console.log(data.msg)
     if(data.msg=="0"){
      this.validEmail= "Existant";
     }
    //  else {this.router.navigate(["/admin"])}
    }
  )
  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm .patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string};
      reader.readAsDataURL(file);}
}
