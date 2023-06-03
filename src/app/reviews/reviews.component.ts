import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/ApiService";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ReviewModel} from "./review.model";
import {UserModel} from "../user-account/user.model";
@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  reviewForm: FormGroup;
  username!: string;
  token!: string;
  constructor(private apiService: ApiService, private formBuilder: FormBuilder) {
    this.reviewForm = this.formBuilder.group({
      // hotelName: ['', Validators.required],
      reviewText: ['', Validators.required],
    });

    this.username = localStorage.getItem('username') || '';
    this.token = localStorage.getItem('token') || '';
  }

  ngOnInit(): void {
    this.fetchReviews();
  }

  fetchReviews() {
    this.apiService.getReviewsByUsername(this.username, this.token)
      .subscribe({
        next: (reviews: ReviewModel[]) => {
          if (reviews.length > 0) {
            const firstReview = reviews[0];
            this.reviewForm.patchValue({
              reviewText: firstReview.reviewText
            });
          }
          console.log("Fetched successfully");
        },
        error: (error: any) => {
          console.log("Fetch Error");
          console.error(error);
        }
      });
  }



}
