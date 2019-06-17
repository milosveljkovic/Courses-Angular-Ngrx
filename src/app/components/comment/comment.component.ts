import { Component, OnInit,Input } from '@angular/core';
import { myComment } from 'src/app/models/MyComment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input()
  comment:myComment

  constructor() { }

  ngOnInit() {
  }

}
