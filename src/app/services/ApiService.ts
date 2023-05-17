import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
providedIn: 'root'
})
export class ApiService {


  constructor(private http: HttpClient) { }
  private backendUrl = 'http://localhost:4200';
  apiUrl='';
  GetAll() {
    return this.http.get(this.apiUrl)
  }

  GetByCode(code: any) {
    return this.http.get(this.apiUrl + '/' + code);
  }

  ProceedRegister(inputData: any) {
    return this.http.post(this.apiUrl, inputData);
  }



}
