import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  firstNameError: string = '';
  lastNameError: string = '';
  phoneError: string = '';
  emailError: string = '';
  passwordError: string = '';
  confirmPasswordError: string = '';

  onBlur(field: string) {
    switch (field) {
      case 'firstName':
        this.validateFirstName();
        break;
      case 'lastName':
        this.validateLastName();
        break;
      case 'phone':
        this.validatePhone();
        break;
      case 'email':
        this.validateEmail();
        break;
      case 'password':
        this.validatePassword();
        break;
      case 'confirmPassword':
        this.validateConfirmPassword();
        break;
    }
  }

  validateFirstName() {
    this.firstNameError = this.firstName ? '' : 'First name is required';
  }

  validateLastName() {
    this.lastNameError = this.lastName ? '' : 'Last name is required';
  }

  validatePhone() {
    this.phoneError = this.phone ? '' : 'Phone number is required';
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.emailError = !this.email
      ? 'Email is required'
      : !emailPattern.test(this.email)
      ? 'Please enter a valid email address'
      : '';
  }

  validatePassword() {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
    this.passwordError = !this.password
      ? 'Password is required'
      : !passwordPattern.test(this.password)
      ? 'Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character'
      : '';
  }

  validateConfirmPassword() {
    this.confirmPasswordError =
      this.confirmPassword !== this.password ? 'Passwords do not match' : '';
  }

  onSubmit() {
    this.validateFirstName();
    this.validateLastName();
    this.validatePhone();
    this.validateEmail();
    this.validatePassword();
    this.validateConfirmPassword();

    if (
      this.firstNameError ||
      this.lastNameError ||
      this.phoneError ||
      this.emailError ||
      this.passwordError ||
      this.confirmPasswordError
    ) {
      return;
    }

    console.log('Form submitted:', {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
      password: this.password,
    });
  }
}
