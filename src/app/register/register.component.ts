import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { ToastrService } from "ngx-toastr";
import { ApiService } from "../services/ApiService";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router,
              private toastr: ToastrService) {
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
          // Registration success, handle response if needed
          console.log('Registration successful');
        },
        error: (error) => {
          // Registration error, handle error if needed
          console.error('Registration failed:', error);
        }
      });
    }
  }
}
