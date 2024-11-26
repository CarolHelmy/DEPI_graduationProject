import { Component,OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { LogInComponent } from '../log-in/log-in.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterOutlet, LogInComponent, RouterLink, RouterModule,CommonModule,HomeComponent,ReactiveFormsModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }



  public isLoggedIn: boolean = false;  // Initially set to false
  public userName: string = '';  // Store the user name if needed

  constructor(private router: Router) { }


  ngOnInit(): void {
    // You could check for stored login status here (e.g., from localStorage or a service)
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    this.isLoggedIn = storedLoginStatus === 'true';  // Convert the string back to a boolean

    // Optionally, retrieve and display the user's name
    this.userName = localStorage.getItem('userName') || 'User';
  }

  onLoginSuccess() {
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');  // Save the login status to persist between page reloads
  }

  // Method to handle user logout
  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    this.router.navigate(['/home']);
  }
}