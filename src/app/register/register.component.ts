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

  // constructor(private builder: FormBuilder, private toastr: ToastrService,
  //             private service: ApiService, private router: Router ) {
  // }

  // registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: ApiService, private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    // this.registerForm = this.formBuilder.group({
    //   firstName: ['', Validators.required],
    //   lastName: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   phoneNumber: ['', Validators.required],
    //   username: ['', Validators.required],
    //   password: ['', [Validators.required, Validators.minLength(8)]],
    // });
  }


  registerForm  = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  // proceedRegistration() {
  //   if(this.registerForm.valid) {
  //     this.service.ProceedRegister(this.registerForm.value).subscribe(res=> {
  //       this.router.success('Please contact admin for access', 'Your account has been created');
  //       this.router.navigate(['login']);
  //     });
  //   } else {
  //     this.toastr.warning('Please enter valid data');
  //   }
  // }
}
