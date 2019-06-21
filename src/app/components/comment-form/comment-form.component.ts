import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {AddComment} from '../../store/actions/comments.action'
import { Store } from '@ngrx/store';
import {CommentsState,selectTotalComments} from '../../store/adapters/comments.adapter'
import {myComment} from '../../models/MyComment'
import {UpdatePublication} from '../../store/actions/publications.action'
import { State } from 'src/app/store/reducers/root.reducer';
import { AddToMyComments } from '../../store/actions/user.action'

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input()
  publication:Publication;

  numberOfEntities:number;
  emptyField:boolean;
  myComment:myComment;
  user:User;

  userComment=new FormGroup({
    comment:new FormControl(''),
    rating:new FormControl('')
  })

  constructor(private store:Store<State>) { 
    this.emptyField=true;
  }

  ngOnInit() {
    this.store.select(selectTotalComments)
    .subscribe(numberOfComments=>this.numberOfEntities=numberOfComments);
    this.store.select(state=>state.user).subscribe(user=>this.user=user);
  }

  onSubmit(){
    if(!this.handleError()){
      this.myComment={
        id:this.numberOfEntities+1,
        publicationId:this.publication.id,
        dateOfPublish:new Date().getTime().toString(),
        name:this.user.name,
        email:this.user.email,
        comment:this.userComment.value.comment,
        rating:this.userComment.value.rating
      }

      var newVotersRatingSum:number=this.publication.rating.votersRatingSum+this.userComment.value.rating
      var newNumberOfVoters:number=this.publication.rating.numberOfVoters+1;
      
      this.publication.rating.votersRatingSum=newVotersRatingSum;
      this.publication.rating.numberOfVoters=newNumberOfVoters;

      this.store.dispatch(new UpdatePublication(this.publication))
      this.store.dispatch(new AddComment(this.myComment))

      this.user.mycomments.push(this.numberOfEntities+1);
      this.store.dispatch(new AddToMyComments(this.user))

    }else{
      this.emptyField=false;
    }
  }

  handleError(){
    if(this.userComment.value.comment.length===0)
    return true;

    return false;
  }
}
