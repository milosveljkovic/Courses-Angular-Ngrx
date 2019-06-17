import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import {PublicationState,selectAllPublications} from '../../store/reducers/publications.reducer'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications$:Observable<Publication[]>;

  constructor(private store:Store<PublicationState>,) {
   }

  ngOnInit() {
    this.publications$=this.store.select(selectAllPublications);
  }
}
