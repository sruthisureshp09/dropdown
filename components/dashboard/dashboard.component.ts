import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./User";
import { TokenService } from "../../services/token.service";
import { LoginService } from "../../services/login.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  user: User;
  tok: any;
  constructor(
    private token: TokenService,
    private login: LoginService,
    private http: HttpClient
  ) {
    this.tok = this.token.get();
    //this.getUser(this.tok);
  }

  ngOnInit() {
    // Make the HTTP request:
    /*  this.http.get<User>("http://127.0.0.1:8000/api/auth/me").subscribe(data => {
      console.log(data);
      this.user = data;
    }); */
  }
  /* getUser(tok) {
    this.login.getUser(tok).subscribe(
      (res: User[]) => {
        console.log(res);
        this.user = res;
      },
      err => {
        console.log(err);
        alert("error occured");
      }
    );
  } */
}
