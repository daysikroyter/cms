import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';

  onBlur(field: string) {
    if (field === 'email') {
      this.validateEmail();
    } else if (field === 'password') {
      this.validatePassword();
    }
  }

  validateEmail() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!this.email) {
      this.emailError = 'Email field is required';
    } else if (!emailPattern.test(this.email)) {
      this.emailError = 'Please enter a valid email address';
    } else {
      this.emailError = '';
    }
  }

  validatePassword() {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,20}$/;
    if (!this.password) {
      this.passwordError = 'Password field is required';
    } else if (!passwordPattern.test(this.password)) {
      this.passwordError =
        'Password must be 8-20 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
    } else {
      this.passwordError = '';
    }
  }

  onSubmit() {
    this.validateEmail();
    this.validatePassword();

    if (this.emailError || this.passwordError) {
      return;
    }

    console.log('Форма отправлена:', {
      email: this.email,
      password: this.password,
    });
  }
}
