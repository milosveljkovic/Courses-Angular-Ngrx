import { Component } from '@angular/core';
import { PublicationService } from 'src/app/services/publication.service';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers/root.reducer';
import { AddAllPublications } from './store/actions/publications.action';
import { CommentService } from 'src/app/services/comment.service';
import { AddAll } from 'src/app/store/actions/comments.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rwa';

  constructor(
    private store:Store<State>,
    private publicationService:PublicationService,
    private commentService:CommentService) {
   }

  ngOnInit(){
    this.publicationService.getAllPublications()
    .subscribe(publications=>{
      this.store.dispatch(new AddAllPublications(publications))})

      this.commentService.getAllComments()
      .subscribe((comments)=>{
        this.store.dispatch(new AddAll(comments))
      })
  }
}
