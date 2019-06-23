import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {PublicationState,selectAllPublications} from '../../store/adapters/publications.adapter'
import {Router} from '@angular/router'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-popular-publications',
  templateUrl: './popular-publications.component.html',
  styleUrls: ['./popular-publications.component.css']
})
export class PopularPublicationsComponent implements OnInit {

  publications$:Observable<Publication[]>;

  constructor(private store:Store<PublicationState>,private router:Router) { }

  ngOnInit() {

    if(localStorage.getItem("LoggedSuccess")!=="true"){
      this.router.navigate(['login'])
    }

    this.publications$=this.store.select(selectAllPublications)
    .pipe(
      map(publication=>publication
        .filter(publication=>
          (publication.rating.numberOfVoters!==0)&&((publication.rating.votersRatingSum/publication.rating.numberOfVoters)>=8.5)))
    )

  }

}
