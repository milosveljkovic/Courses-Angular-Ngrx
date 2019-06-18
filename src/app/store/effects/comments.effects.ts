import {Injectable} from '@angular/core'
import {Actions,Effect, createEffect, ofType} from '@ngrx/effects'
import {CommentService} from '../../services/comment.service'
import {CommentsActionsTypes, AddComment} from '../actions/comments.action'
import { mergeMap,map } from 'rxjs/operators';

@Injectable()
export class CommentsEffects{

    constructor(
        private action$:Actions,
        private commentsService:CommentService){}


    getComments=createEffect(()=>
        this.action$.pipe(
            ofType(CommentsActionsTypes.LOAD_All_COMMENTS),
            mergeMap(()=>this.commentsService.getAllComments()
            .pipe(
                map((comments)=>({type:CommentsActionsTypes.LOAD_All_COMMENTS_SUCCESS,comments:comments}))
                )
            )
        )
    )

    addComment=createEffect(()=>
        this.action$.pipe(
            ofType<AddComment>(CommentsActionsTypes.ADD_COMMENT),
            map((action)=>action.mycomment),
            mergeMap((newComment)=>this.commentsService.postComment(newComment)
            .pipe(
                map((newComment)=>({type:CommentsActionsTypes.ADD_COMMENT_SUCCESS,mycomment:newComment}))
                )
            )
        )
    )
    

}
