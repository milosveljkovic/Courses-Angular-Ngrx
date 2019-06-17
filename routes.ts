import { Routes } from '@angular/router';
import { HomeComponent } from './src/app/components/home/home.component';
import { PublishComponent } from './src/app/components/publish/publish.component';
import { DetailComponent } from './src/app/components/detail/detail.component';

export const appRoutes: Routes = 
[
    { path: 'home', component: HomeComponent },
    { path: 'publish', component: PublishComponent },
    { path: 'details/:id', component: DetailComponent }
];