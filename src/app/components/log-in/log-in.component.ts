import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, HttpClientModule, RouterOutlet, LogInComponent, RouterLink, RouterModule,CommonModule,HomeComponent,NavbarComponent],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  
  public loginForm!: FormGroup
  public isLoggedIn: boolean = false;

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password 
      });
      if(user){
        alert('Login Succesful');
        localStorage.setItem('isLoggedIn', 'true');  // Save login status
        localStorage.setItem('userName', user.name);  // Optionally store user name
        this.loginForm.reset();
      this.router.navigate(["settings"]) //waiting for making home page............................................
      }else{
        alert("The email or password are wrong, please try again")
      }
    },err=>{
      alert("Something went wrong")
    })
  }

}
