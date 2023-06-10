import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ApiService} from "../services/ApiService";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-write-reservations',
  templateUrl: './write-reservations.component.html',
  styleUrls: ['./write-reservations.component.css']
})
export class WriteReservationsComponent implements OnInit {
  reservationForm: FormGroup;
  token!: string;
  hotelId!: number;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) {
    this.reservationForm = this.formBuilder.group({
      checkInDate: [],
      checkOutDate: [],
      price: [],
      hotelId: [],
      status: ['pending']
    });
    this.token = localStorage.getItem('token') || '';
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.hotelId = +idParam;
        this.reservationForm.patchValue({ hotelId: this.hotelId });
      } else {
        console.log("Incorrect mapping");
      }
    });
  }

  onSubmit() {
    const reservation = this.reservationForm.value;

    reservation.checkInDate = formatDate(reservation.checkInDate, 'yyyy-MM-dd', 'en-US');
    reservation.checkOutDate = formatDate(reservation.checkOutDate, 'yyyy-MM-dd', 'en-US');


    this.apiService.addReservation(reservation, this.token).subscribe({
      next: () => {
        console.log('Reservation added successfully');
        this.snackBar.open('Reservation added successfully', 'Close', {duration: 3000});
      },
      error: (error) => {
        console.error('Error adding reservation:', error);
        this.snackBar.open('There was an error while adding the reservation', 'Close', { duration: 3000 });
      }
    });

  }
  clearForm() {
    this.reservationForm.reset();
    this.snackBar.open('Reservation discarded successfully', 'Close', { duration: 3000 });
  }
}
