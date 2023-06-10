import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/ApiService";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-write-reviews',
  templateUrl: './write-reviews.component.html',
  styleUrls: ['./write-reviews.component.css']
})
export class WriteReviewsComponent implements OnInit {
  reviewForm: FormGroup;
  token!: string;
  hotelId!: number;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute) {
    this.reviewForm = this.formBuilder.group({
      userId: [],
      hotelId: [],
      reviewText: []
    });
    this.token = localStorage.getItem('token') || '';
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.hotelId = +idParam;
        this.reviewForm.patchValue({ hotelId: this.hotelId });
      } else {
        console.log("Incorrect mapping");
      }
    });
  }

  onSubmit() {
    const review = this.reviewForm.value;

    this.apiService.addReview(review, this.token).subscribe({
      next: (response) => {
        console.log("Review added successfully");
        this.snackBar.open('Review added successful', 'Close', { duration: 3000 });
      },
      error: (error) => {
        console.error("Error adding review:", error);
        this.snackBar.open('There was an error while posting the review', 'Close', { duration: 3000 });
      }
    });
  }

  clearForm() {
    this.reviewForm.reset();
    this.reviewForm.patchValue({ hotelId: this.hotelId });
    this.snackBar.open('Review discarded successfully', 'Close', { duration: 3000 });
  }

}
