import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogInComponent } from "./components/log-in/log-in.component";
import { RegisterComponent } from "./components/register/register.component";
import { ComponentsComponent } from './components/components.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditComponent } from './components/edit/edit.component';
import { SettingAccountComponent } from './components/setting-account/setting-account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookBodyComponent } from "./components/book-body/book-body.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsComponent, LogInComponent, RegisterComponent, HomeComponent, FooterComponent, NavbarComponent, EditComponent, SettingAccountComponent, ProfileComponent, BookBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Library';
}
