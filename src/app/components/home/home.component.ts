import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { LoadPublications } from '../../store/actions/publications.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  publications$:Observable<Publication[]>;

  constructor(
    private store:Store<State>,
    private publicationService:PublicationService) {
   }

  ngOnInit() {
    this.publicationService.getAllPublications()
    .subscribe(publications=>{
      this.store.dispatch(new LoadPublications(publications))})
    this.publications$=this.store.select(store=>store.publications);
  }

}
