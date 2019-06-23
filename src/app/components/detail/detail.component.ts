import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { Observable } from 'rxjs';
import { PublicationService } from 'src/app/services/publication.service';
import { selectAllComments } from 'src/app/store/adapters/comments.adapter';
import { myComment } from 'src/app/models/MyComment';
import { filter, flatMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  publication:Publication;
  isMyPublication:boolean;
  alreadyLeftAComment:boolean;
  comments$:Observable<myComment[]>
  user:User;

  constructor(
    private route:ActivatedRoute,
    private store:Store<State>) { 
      this.isMyPublication=false;
      this.alreadyLeftAComment=false;
    }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      const id=params['id'];
      this.store.select(store=>store.publications.entities?store.publications.entities[id]:null)
      .subscribe(pub=>this.publication=pub);
    })

    this.comments$=this.store.select(selectAllComments);

    this.store.select(state=>state.user).subscribe(user=>this.user=user);
    if(this.publication){
    if(this.myPublication(this.user,this.publication.id)){
      this.isMyPublication=true;
    }
    this.commentsForThisPublication(this.comments$,this.publication.id);
    this.didILeaveComment(this.user,this.comments$);
  }

  }

  myPublication(user:User,id:number){
      return user.mypublications.includes(id);
  }

  commentsForThisPublication(comments:Observable<myComment[]>,publicationId:number){
    this.comments$=comments.pipe(
      map(comments=>comments.filter(comment=>comment.publicationId===publicationId))
    )
  }

  didILeaveComment(user:User,comments:Observable<myComment[]>){
    comments.pipe(
      flatMap(comments=>comments),
    ).subscribe(comment=>{
      if(user.mycomments.includes(comment.id)){
        this.alreadyLeftAComment=true;
      }
    })
  }

}
