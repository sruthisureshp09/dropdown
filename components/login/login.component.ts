import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Login } from "../../interfaces/Login";
import { LoginService } from "../../services/login.service";
import { TokenService } from "../../services/token.service";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  };
  public error = null;

  constructor(
    private loginService: LoginService,
    private Token: TokenService,
    private Router: Router,
    private auth: AuthService
  ) {}
  ngOnInit() {}
  onSubmit() {
    this.loginService.login(this.form).subscribe(
      data => {
        console.log(data);
        this.handleResponse(data);
      },
      error => {
        console.log(error);
        //alert("Username or Password doesn't match");
        this.handleError(error);
      }
    );
  }
  handleError(error) {
    this.error = error.error.error;
  }
  handleResponse(data) {
    localStorage.setItem("user_data", JSON.stringify(data.user));
    this.Token.handle(data.access_token);
    this.auth.changeStatus(true);
    this.Router.navigateByUrl("/dashboard");
  }
}
