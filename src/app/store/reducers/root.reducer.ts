import { ActionReducerMap, reduceState } from '@ngrx/store';
import {publicationReducer} from './publications.reducer'
import {PublicationState} from './publications.reducer'
import {commentsReducer} from './comments.reducer';
import {CommentsState} from './comments.reducer'

export interface State {
    publications:PublicationState,
    comments:CommentsState
}

export const rootReducer: ActionReducerMap<State> = {
    publications:publicationReducer,
    comments:commentsReducer
};