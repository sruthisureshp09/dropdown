import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MultifilesService {
  constructor(private http: HttpClient) {}
  API_ENDPOINT = "http://127.0.0.1:8000/api";
  saveFiles(total_form) {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "multipart/form-data"
    });

    let options = {
      headers: httpHeaders
    };

    return this.http.post(this.API_ENDPOINT + "/fileupload", total_form);
  }
}
