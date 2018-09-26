import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Login } from "../interfaces/Login";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  API_ENDPOINT = "http://127.0.0.1:8000/api/auth";

  constructor(private httpClient: HttpClient) {}

  login(login: Login) {
    return this.httpClient.post(this.API_ENDPOINT + "/login", login);
  }

  getUser() {
    return this.httpClient.get(this.API_ENDPOINT + "/me");
  }
  logout(tok) {
    return this.httpClient.get(this.API_ENDPOINT + "/logout", tok);
  }
}
