import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, RouterOutlet, LogInComponent, RouterLink, RouterModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public signUpForm!: FormGroup;
  public emailAlreadyExists: boolean = false; // Flag to indicate if the email already exists

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // Validators to ensure fields are required
    this.signUpForm = this.formBuilder.group({
      name: ["", Validators.required], // Full name is required
      email: ["", [Validators.required, Validators.email]], // Email is required and should be a valid email
      password: ["", [Validators.required, Validators.minLength(6)]], // Password is required, minimum length 6
      terms: [false, Validators.requiredTrue] // Checkbox for terms and conditions is required to be true
    });
  }

  signUp() {
    if (this.signUpForm.valid) {
      const email = this.signUpForm.get('email')?.value;

      // Check if the email already exists by sending a GET or POST request to your backend API
      this.http.get<any>(`http://localhost:3000/signupUsersList?email=${email}`).subscribe(
        res => {
          if (res && res.length > 0) { // If the email exists in the server response
            this.emailAlreadyExists = true; // Set flag to true to display error
            window.alert("his email is already registered. Please use a different email.");
          } else {
            // If email doesn't exist, proceed with signup
            this.http.post<any>("http://localhost:3000/signupUsersList", this.signUpForm.value)
              .subscribe(
                res => {
                  alert('SIGNUP SUCCESSFUL');
                  this.signUpForm.reset();
                  this.router.navigate(["login"]);
                },
                err => {
                  alert("Something went wrong");
                }
              );
          }
        },
        err => {
          console.error("Error checking email existence", err);
          alert("Something went wrong");
        }
      );
    }
  }
}
