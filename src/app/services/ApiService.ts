import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) {}
  private backendUrl = 'http://localhost:8080';



  registerUser(user: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1')
      })
    };

    return this.http.post(`${this.backendUrl}/api/register`, user, httpOptions);
  }

  loginUser(username: string, password: string): Observable<any> {
    const body = { username, password };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1')
      })
    };

    return this.http.post(`${this.backendUrl}/api/login`, body, httpOptions);
  }

  logoutUser(username: string, token: string): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token // Include the custom-token header
      }),
      params: {
        'username': username // Pass the username as a query parameter
      }
    };

    return this.http.post<void>(`${this.backendUrl}/api/logout`, {}, httpOptions);
  }


}
