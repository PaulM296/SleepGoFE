import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ToastrService } from "ngx-toastr";
import { ApiService } from "../services/ApiService";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage!: string;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router,
              private toastr: ToastrService) {
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
          // Handle successful login
          console.log('Login successful:', response);

          localStorage.setItem('username', username);
          localStorage.setItem('token', response.token);

          this.router.navigate(['']);
        },
        error: (error) => {
          // Handle login error
          console.error('Login failed:', error);
          this.errorMessage = 'Login failed. Please try again.';
        }
      });
    }
  }
}
