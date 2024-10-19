import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  signupForm: FormGroup;
  isLogin: boolean = true; // Toggle between login and sign-up

  // Hardcoded user account for testing
  hardcodedUser = {
    email: 'testuser@example.com',
    password: 'password123'
  };

  constructor(private fb: FormBuilder, private router: Router) { // Inject Router
    // Initialize login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });

    // Initialize signup form
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  // Toggle between login and signup
  toggleForm(isLogin: boolean): void {
    this.isLogin = isLogin;
  }

  // Handle login form submission
  onLoginSubmit(): void {
    const { email, password } = this.loginForm.value;

    if (email === this.hardcodedUser.email && password === this.hardcodedUser.password) {
      alert('Login successful!');
      this.router.navigate(['']); // Redirect to the main body component
    } else {
      alert('Invalid credentials');
    }
  }

  // Handle signup form submission
  onSignupSubmit(): void {
    if (this.signupForm.valid) {
      alert('Sign-up successful! Now you can log in.');
      this.toggleForm(true);  // Switch to login form after successful signup
      this.router.navigate(['']); // Redirect to the main body component after signup
    }
  }
}
