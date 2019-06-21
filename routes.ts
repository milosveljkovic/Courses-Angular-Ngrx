import { Routes } from '@angular/router';
import { HomeComponent } from './src/app/components/home/home.component';
import { PublishComponent } from './src/app/components/publish/publish.component';
import { DetailComponent } from './src/app/components/detail/detail.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';

export const appRoutes: Routes = 
[
    { path: 'home', component: HomeComponent },
    { path: 'publish', component: PublishComponent },
    { path: 'details/:id', component: DetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'navbar', component: NavbarComponent},
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo:"/home" }
];