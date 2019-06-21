import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {CommentsState,selectAllComments} from '../../store/adapters/comments.adapter'
import { myComment } from 'src/app/models/MyComment';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {

  @Input()
  comments:Observable<myComment[]>;

  constructor() {
     }

  ngOnInit() {
  }

}
