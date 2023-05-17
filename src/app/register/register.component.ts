import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder) {
  }

  registerForm = this.builder.group({
    id: this.builder.control('',Validators.compose([Validators.required, Validators.minLength(5)])),
    firstName: this.builder.control('', Validators.required),
    lastName: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    phoneNumber: this.builder.control('', Validators.required),
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required),
  })

  proceedRegistration() {
    if(this.registerForm.valid) {

    } else {

    }
  }
}
