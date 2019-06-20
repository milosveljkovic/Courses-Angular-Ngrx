import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import {AddComment} from '../../store/actions/comments.action'
import { Store } from '@ngrx/store';
import {CommentsState,selectTotalComments} from '../../store/adapters/comments.adapter'
import {myComment} from '../../models/MyComment'
import {UpdatePublication} from '../../store/actions/publications.action'

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
  publicationNewVoter:Publication

  userComment=new FormGroup({
    email:new FormControl(''),
    name:new FormControl(''),
    comment:new FormControl(''),
    rating:new FormControl('')
  })

  constructor(private store:Store<CommentsState>) { 
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
        publicationId:this.publication.id,
        dateOfPublish:new Date().getTime().toString(),
        name:this.userComment.value.name,
        email:this.userComment.value.email,
        comment:this.userComment.value.comment,
        rating:this.userComment.value.rating
      }

      var newNumberOfVoters:number=this.publication.rating.numberOfVoters+1;
      var newVotersRatingSum:number=this.publication.rating.votersRatingSum+this.userComment.value.rating
      console.log(newVotersRatingSum);
      console.log(this.userComment.value.rating);
      console.log(this.publication.rating.votersRatingSum);
      

      this.publicationNewVoter={
        id:this.publication.id,
        title:this.publication.title,
        location:this.publication.location,
        price:this.publication.price,
        newPrice:this.publication.newPrice,
        duration:this.publication.duration,
        isAvailable: this.publication.isAvailable,
        onSale: this.publication.onSale,
        description:this.publication.description,
        imageUrl:this.publication.imageUrl,
        rating:{
          votersRatingSum:newVotersRatingSum,
          numberOfVoters:newNumberOfVoters
        }
      }

      this.store.dispatch(new UpdatePublication(this.publicationNewVoter))
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
