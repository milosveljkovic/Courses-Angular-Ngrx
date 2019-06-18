import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import {AddComment} from '../../store/actions/comments.action'
import { Store } from '@ngrx/store';
import {CommentsState,selectTotalComments} from '../../store/reducers/comments.reducer'
import {myComment} from '../../models/MyComment'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {
  @Input()
  publicationId:number;

  numberOfEntities:number;
  emptyField:boolean;
  myComment:myComment;

  userComment=new FormGroup({
    email:new FormControl(''),
    name:new FormControl(''),
    comment:new FormControl('')
  })

  constructor(
    private commentService:CommentService,
    private store:Store<CommentsState>) { 
    this.emptyField=true;
  }

  ngOnInit() {
    this.store.select(selectTotalComments)
    .subscribe(numberOfComments=>this.numberOfEntities=numberOfComments);
  }

  onSubmit(){
    if(!this.handleError()){
      this.myComment={
        id:this.numberOfEntities+1,
        publicationId:this.publicationId,
        dateOfPublish:new Date().getTime().toString(),
        name:this.userComment.value.name,
        email:this.userComment.value.email,
        comment:this.userComment.value.comment
      }
      this.store.dispatch(new AddComment(this.myComment))
    }else{
      this.emptyField=false;
    }
  }

  handleError(){
    if(this.userComment.value.email.length===0
      || this.userComment.value.name.length===0
      || this.userComment.value.comment.length===0)
    return true;

    return false;
  }
}
