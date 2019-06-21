import { ActionReducerMap} from '@ngrx/store';
import {publicationReducer} from './publications.reducer'
import {PublicationState} from '../adapters/publications.adapter'
import {commentsReducer} from './comments.reducer';
import {CommentsState} from '../adapters/comments.adapter'
import {userReducer} from './user.reducer'

export interface State {
    publications:PublicationState,
    comments:CommentsState,
    user:User
}

export const rootReducer: ActionReducerMap<State> = {
    publications:publicationReducer,
    comments:commentsReducer,
    user:userReducer
};