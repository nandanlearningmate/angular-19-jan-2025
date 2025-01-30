import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  signupForm: FormGroup; // Declare the form group
  nameError: string = "Name is required";
  emailError: string = "Email is required";
  genderError: string = "Gender is required";
  roleError: string = "Role is required";
  tncError: string = "TNC is required";

  constructor() { 
    // Initialize the form group
    this.signupForm = new FormGroup({
      'full_name': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'email': new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      'gender': new FormControl("", [Validators.required]),
      'role': new FormControl("", [Validators.required]),
      'tnc': new FormControl(false, [Validators.requiredTrue])
    })
  }

  ngOnInit() {
    
  }


  signupFormSubmit() {
    if (this.signupForm.valid) {
      //console.log('Form submitted:', this.signupForm.value);
    } else {
      this.signupForm.markAllAsTouched();  // Force validation errors to show
      console.log('Form is invalid');
    }
    this.setfullNameError();
    this.setEmailError();
    this.setGenderError();
    this.setRoleError();
    this.setTncError();
  }

  //Full name error
  setfullNameError() {
    let formControlName = this.signupForm.get('full_name');
    if(formControlName?.hasError('required')) {
      this.nameError = "Name is required";
    }
    else if(formControlName?.hasError('minlength')) {
      this.nameError = "Name must be at least 3 characters";
    }
    else {
      this.nameError = "";
    }
  }

  //Email error
  setEmailError() {
    let formControlEmail = this.signupForm.get('email');
    if(formControlEmail?.hasError('required')) {
      this.emailError = "Email is required";
    }
    else if(formControlEmail?.hasError('pattern')) {
      this.emailError = "Invalid email";
    }
    else {
      this.emailError = "";
    }
  }

  //Gender error
  setGenderError() {
    let formControlGender = this.signupForm.get('gender');
    if(formControlGender?.hasError('required')) {
      this.genderError = "Gender is required";
    }
    else {
      this.genderError = "";
    }
  }

  //Role error

  setRoleError() {
    let formControlRole = this.signupForm.get('role');
    if(formControlRole?.hasError('required')) {
      this.roleError = "Role is required";
    }
    else {
      this.roleError = "";
    }
  }

  //TNC error 
  setTncError() {
    let formControlTnc = this.signupForm.get('tnc');
    if(formControlTnc?.hasError('required')) {
      this.tncError = "TNC is required";
    }
    else {
      this.tncError = "";
    }
  }

   
}
