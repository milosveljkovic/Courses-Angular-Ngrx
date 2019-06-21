import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import {PublicationState,selectAllPublications} from '../../store/adapters/publications.adapter'
import {Router} from '@angular/router'
import { LoadUser } from 'src/app/store/actions/user.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications$:Observable<Publication[]>;

  constructor(private store:Store<PublicationState>,private router:Router) {
   }

  ngOnInit() { 

    if(localStorage.getItem("LoggedSuccess")!=="true"){
      this.router.navigate(['login'])
    }
    this.publications$=this.store.select(selectAllPublications);
    this.store.dispatch(new LoadUser(Number(localStorage.getItem("id"))))
  }
}
