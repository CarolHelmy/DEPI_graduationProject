import { Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { EditComponent } from './components/edit/edit.component';
import { SettingAccountComponent } from './components/setting-account/setting-account.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BookBodyComponent } from './components/book-body/book-body.component';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"login", component:LogInComponent},
    {path:"signUp", component:RegisterComponent},
    {path:"home", component:HomeComponent},
    {path:"search", component:SearchComponent},
    {path:"edit", component:EditComponent},
    {path:"settings", component:SettingAccountComponent},
    {path:"profile", component:ProfileComponent},
    {path:"book", component:BookBodyComponent}
];



