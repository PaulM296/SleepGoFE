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

  constructor(private formBuilder: FormBuilder, private service: ApiService, private router: Router,
              private toastr: ToastrService) {
    sessionStorage.clear();
  }

  ngOnInit() {
  }

  loginForm  = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required]],
  });
}
