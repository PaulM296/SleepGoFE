import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ToastrService } from "ngx-toastr";
import { ApiService } from "../services/ApiService";
import { Router } from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;
  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router,
              private toastr: ToastrService, private snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      this.apiService.loginUser(username, password).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          this.snackBar.open('Login successful', 'Close', { duration: 3000 });
          localStorage.setItem('username', username);
          localStorage.setItem('token', response.token);
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          this.snackBar.open('Login failed', 'Close', { duration: 3000 });
          this.errorMessage = 'Login failed. Please try again.';
        }
      });
    }
  }
  togglePasswordVisibility(): void {
    this.hide = !this.hide;
  }
}
