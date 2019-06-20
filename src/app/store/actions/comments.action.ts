import {Action} from '@ngrx/store';
import { myComment } from 'src/app/models/MyComment';

export enum CommentsActionsTypes{
    ADD_COMMENT='[Add Comment]',
    ADD_COMMENT_SUCCESS='[Add Comment Success]',
    LOAD_All_COMMENTS='[Load All Comments]',
    LOAD_All_COMMENTS_SUCCESS='[Load All Comments Success]'
}

export class AddComment implements Action{
    readonly type=CommentsActionsTypes.ADD_COMMENT;
    constructor(public mycomment:myComment){}
}

export class AddCommentSuccess implements Action{
    readonly type=CommentsActionsTypes.ADD_COMMENT_SUCCESS;
    constructor(public mycomment:myComment){}
}

export class LoadAllComments implements Action{
    readonly type=CommentsActionsTypes.LOAD_All_COMMENTS;
    constructor(){}
}

export class LoadAllCommentsSuccess implements Action{
    readonly type=CommentsActionsTypes.LOAD_All_COMMENTS_SUCCESS;
    constructor(public comments:myComment[]){}
}

export type CommentsActions 
= AddComment
| AddCommentSuccess
| LoadAllComments
| LoadAllCommentsSuccess