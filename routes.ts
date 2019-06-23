import { Routes } from '@angular/router';
import { HomeComponent } from './src/app/components/home/home.component';
import { PublishComponent } from './src/app/components/publish/publish.component';
import { DetailComponent } from './src/app/components/detail/detail.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { PopularPublicationsComponent } from 'src/app/components/popular-publications/popular-publications.component';

export const appRoutes: Routes = 
[
    { path: 'home', component: HomeComponent },
    { path: 'publish', component: PublishComponent },
    { path: 'popular', component: PopularPublicationsComponent },
    { path: 'details/:id', component: DetailComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '',   redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo:"/home" }
];