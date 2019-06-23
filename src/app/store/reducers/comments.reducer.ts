import {CommentsActions, CommentsActionsTypes} from '../actions/comments.action';
import {CommentsState,commentsAdapter} from '../adapters/comments.adapter'

export const initialState:CommentsState={
    ids:[],
    entities:{}
}

export function commentsReducer(state:CommentsState=initialState,action:CommentsActions) {

    switch(action.type){
        case CommentsActionsTypes.ADD_COMMENT_SUCCESS:{
            return commentsAdapter.addOne(action.mycomment, state)
        }
        case CommentsActionsTypes.LOAD_All_COMMENTS_SUCCESS:{
            return commentsAdapter.addAll(action.comments, state)
        }
        default:
            return state;
    }
}

