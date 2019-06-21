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
  isMyPublication:boolean;
  user:User;

  constructor(
    private route:ActivatedRoute,
    private store:Store<State>) { 
      this.isMyPublication=false;
    }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];
      this.store.select(store=>store.publications.entities?store.publications.entities[id]:null)
      .subscribe(pub=>this.publication=pub);
    })

    this.store.select(state=>state.user).subscribe(user=>this.user=user);
    if(this.publication){
    if(this.myPublication(this.user,this.publication.id)){
      this.isMyPublication=true;
    }
  }

  }

  myPublication(user:User,id:number){
      return user.mypublications.includes(id);
  }

}
