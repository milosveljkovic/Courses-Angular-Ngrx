import {Action} from '@ngrx/store';
import { myComment } from 'src/app/models/MyComment';
import { CommentsState } from '../reducers/comments.reducer';

export enum CommentsActionsTypes{
    ADD_ONE='Add One',
    ADD_All='Add All'
}

export class AddOne implements Action{
    readonly type=CommentsActionsTypes.ADD_ONE;
    constructor(public mycomment:myComment){}
}

export class AddAll implements Action{
    readonly type=CommentsActionsTypes.ADD_All;
    constructor(public mycomments:myComment[]){}
}

export type CommentsActions =
 AddOne
 |AddAll;