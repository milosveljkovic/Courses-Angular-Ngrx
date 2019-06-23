import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './store/reducers/root.reducer';

import { appRoutes } from '../../routes';

import { HomeComponent } from './components/home/home.component';
import { PublishComponent } from './components/publish/publish.component';
import { PublicationComponent } from './components/publication/publication.component';
import { DetailComponent } from './components/detail/detail.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentComponent } from './components/comment/comment.component';
import { PublicationsEffects } from './store/effects/publications.effects';
import { CommentsEffects } from './store/effects/comments.effects';
import { SaleFormComponent } from './components/sale-form/sale-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserEffects } from './store/effects/user.effects';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PublishComponent,
    PublicationComponent,
    DetailComponent,
    CommentFormComponent,
    CommentsListComponent,
    CommentComponent,
    SaleFormComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([PublicationsEffects,CommentsEffects,UserEffects]),
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    RouterModule.forRoot(
      appRoutes
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
