import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CommentsState,selectAllComments} from '../../store/reducers/comments.reducer'
import { CommentService } from 'src/app/services/comment.service';
import { AddAll } from 'src/app/store/actions/comments.action';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input()
  publicationId:number;

  comments:Observable<any>;

  constructor(
    private store:Store<CommentsState>,
    private commentService:CommentService) {

     }

  ngOnInit() {
    this.commentService.getAllComments()
    .subscribe((comments)=>{
      this.store.dispatch(new AddAll(comments))
    })
    this.comments=this.store.select(selectAllComments);
  }

}
