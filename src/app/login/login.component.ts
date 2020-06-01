import { Component, OnInit } from "@angular/core";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username;
  password;
  mouseoverLogin;
  loginInvalid = false;
  loginForm: FormGroup;
  private formSubmitAttempt: boolean;

  constructor( private authService:AuthService,
     private router:Router,
     private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      userName:['', Validators.required],
      password:['', Validators.required]
    })
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.loginForm.get(field).valid && this.loginForm.get(field).touched) ||
      (this.loginForm.get(field).untouched && this.formSubmitAttempt)
    );
  }

 /* onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  } */

  login(user) {
    this.authService.loginUser(user.userName, user.password)
      .subscribe(resp => {
        console.log(resp);
      if (!resp) {
        this.loginInvalid = true;
      } else {
        this.router.navigate(["dashboard"]);
      }
    });

  }

}
