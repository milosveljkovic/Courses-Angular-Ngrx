import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { Observable } from 'rxjs';
import { PublicationService } from 'src/app/services/publication.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  publication:Publication;

  constructor(
    private route:ActivatedRoute,
    private store:Store<State>) { 
    }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];
      this.store.select(store=>store.publications?store.publications[id]:null)
      .subscribe(pub=>this.publication=pub);
    })
  }

}
