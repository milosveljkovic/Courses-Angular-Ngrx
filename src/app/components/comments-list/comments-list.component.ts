import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CommentsState,selectAllComments} from '../../store/adapters/comments.adapter'

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input()
  publicationId:number;

  comments:Observable<any>;

  constructor(private store:Store<CommentsState>) {
     }

  ngOnInit() {
    this.comments=this.store.select(selectAllComments);
  }

}
