import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserModel} from "./user.model";
import {ApiService} from "../services/ApiService";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  profileForm!: FormGroup;
  username!: string;
  token!: string;
  url: string | undefined;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });

    this.username = localStorage.getItem('username') || '';
    this.token = localStorage.getItem('token') || '';
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    this.apiService.getUserByUsername(this.username, this.token)
      .subscribe({
        next: (user: UserModel) => {
          this.profileForm.patchValue({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phoneNumber: user.phoneNumber
          });
          console.log("Fetched successfully");
        },
        error: (error: any) => {
          console.log("Fetch Error");
          console.error(error);
        }
      });
  }


  onFormSubmit() {
    if (this.profileForm.invalid) {
      return;
    }

    const updatedUser = this.profileForm.value;

    this.apiService.updateUser(this.username, this.token, updatedUser)
      .subscribe({
        next: (response: UserModel) => {
          console.log('Update successful');
          this.snackBar.open('Profile updated successfully', 'Close', { duration: 3000 });
        },
        error: (error: any) => {
          // Handle error
          console.log('Update failed');
          this.snackBar.open('Failed to update profile', 'Close', { duration: 3000 });
        }
      });
  }

  deleteAccount() {
    if (this.username && this.token) {
      this.apiService.deleteUser(this.username, this.token).subscribe({
        next: () => {
          console.log('Account deleted successfully');
          this.snackBar.open('Profile deleted successfully', 'Close', { duration: 3000 });
          localStorage.removeItem('username');
          localStorage.removeItem('token');
          this.router.navigate(['']);
        },
        error: (error) => {
          console.log('The attempt failed');
          this.snackBar.open('Failed to delete profile', 'Close', { duration: 3000 });
          console.log(error);
        }
      });
    }
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target?.result?.toString();
      }
    }
  }

}
