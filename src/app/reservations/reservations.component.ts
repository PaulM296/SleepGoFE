import {Component, OnInit} from '@angular/core';
import {ReviewModel} from "../reviews/review.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../services/ApiService";
import {ReservationsModel} from "./reservations.model";

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {

  reservations!: any[];
  reservationForm: FormGroup;
  username!: string;
  token!: string;
  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.reservations = [];
    this.reservationForm = this.formBuilder.group({
      hotelName: ['', Validators.required],
      reviewText: ['', Validators.required],
    });

    this.username = localStorage.getItem('username') || '';
    this.token = localStorage.getItem('token') || '';
  }

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews() {
    this.apiService.getReservationsByUsername(this.username, this.token).subscribe({
      next: (reservations: ReservationsModel[]) => {
        if (reservations.length > 0) {
          this.reservations = reservations;

          for (const reservation of this.reservations) {
            this.apiService.getHotelById(reservation.hotelId).subscribe({
              next: (hotel: any) => {
                reservation.hotelName = hotel.hotelName;
              },
              error: (error: any) => {
                console.error(error);
              }
            });
          }
        }
        console.log('Fetched successfully');
      },
      error: (error: any) => {
        console.log('Fetch Error');
        console.error(error);
      }
    });
  }

  onSubmit() {
    console.log('submitted');
  }
}
