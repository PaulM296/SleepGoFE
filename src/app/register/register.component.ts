import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ToastrService } from "ngx-toastr";
import { ApiService } from "../services/ApiService";
import { Router } from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  hide= true;
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router,
              private toastr: ToastrService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;
      this.apiService.registerUser(user).subscribe({
        next: (response) => {
          console.log('Registration successful');
          this.snackBar.open('Registration successful', 'Close', { duration: 3000 });
        },
        error: (error) => {
          console.error('Registration failed', error);
          this.snackBar.open('Registration failed', 'Close', { duration: 3000 });
        }
      });
    }
  }
  togglePasswordVisibility() {
    this.hide = !this.hide;
  }
}
