import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserModel } from "../user-account/user.model";
import {ReviewModel} from "../reviews/review.model";
import {ReservationsModel} from "../reservations/reservations.model";

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
        'custom-token': token
      }),
      params: {
        'username': username
      }
    };

    return this.http.post<void>(`${this.backendUrl}/api/logout`, {}, httpOptions);
  }

  getUser(): Observable<UserModel> {
    const username = localStorage.getItem('username');
    return this.http.get<UserModel>(`${this.backendUrl}/api/user-account/${username}`);
  }

  getUserByUsername(username: string, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token
      }),
      params: {
        'username': username
      }
    };
    return this.http.get(`${this.backendUrl}/api/user-account/${username}`, httpOptions);
  }
  updateUser(username: string, token: string, updatedUser: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token
      }),
      params: {
        'username': username
      }
    };
    return this.http.put(`${this.backendUrl}/api/user-account/${username}`, updatedUser, httpOptions);
  }

  deleteUser(username: string, token: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token
      }),
    };
    return this.http.delete(`${this.backendUrl}/api/user-account/${username}`,  httpOptions);
  }

  getReviewsByUsername(username: string, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token
      }),
      params: {
        'username': username
      }
    };

    return this.http.get(`${this.backendUrl}/api/reviews/${username}`, httpOptions);
  }

  getReviewsByHotelId(hotelId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
      }),
    };

    return this.http.get(`${this.backendUrl}/api/reviews/hotel/${hotelId}`, httpOptions);
  }

  getHotelById(hotelId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
      }),
    };

    return this.http.get(`${this.backendUrl}/api/hotel/${hotelId}`, httpOptions);
  }

  getAllHotels() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
      }),
    };

    return this.http.get(`${this.backendUrl}/api/hotel`, httpOptions);
  }



  getReservationsByUsername(username: string, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token
      }),
      params: {
        'username': username
      }
    };

    return this.http.get(`${this.backendUrl}/api/reservations/${username}`, httpOptions);
  }

  getAmenitiesByHotelId(hotelId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
      }),
      params: {
        'hotelId': hotelId.toString()
      }
    };

    return this.http.get(`${this.backendUrl}/api/amenities/getByHotelId`, httpOptions);
  }

  getRoomsByHotelId(hotelId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
      }),
      params: {
        'hotelId': hotelId.toString()
      }
    };

    return this.http.get(`${this.backendUrl}/api/room/getByHotelId`, httpOptions);
  }

  addReview(review: ReviewModel, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token
      })
    };

    return this.http.post(`${this.backendUrl}/api/reviews`, review, httpOptions);
  }

  addReservation(reservation: ReservationsModel, token: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('proiect:parola1'),
        'custom-token': token
      })
    };

    return this.http.post(`${this.backendUrl}/api/reservations`, reservation, httpOptions);
  }

}
