import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { LoadAllPublications } from './store/actions/publications.action';
import { LoadAllComments } from './store/actions/comments.action';
import { LoadUser } from './store/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rwa';

  constructor(private store:Store<State>) {
   }

  ngOnInit(){
      this.store.dispatch(new LoadAllPublications());
      this.store.dispatch(new LoadAllComments());
      if(localStorage.getItem("LoggedSuccess")==="true"){
        this.store.dispatch(new LoadUser(Number(localStorage.getItem("id"))))
      }
  }
}
