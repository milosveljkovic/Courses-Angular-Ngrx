import { ActionReducerMap, reduceState } from '@ngrx/store';
import publicationReducer from './publications.reducer'
import {commentsReducer} from './comments.reducer';
import {CommentsState} from './comments.reducer'

export interface State {
    publications:Publication[],
    comments:CommentsState
}

export const rootReducer: ActionReducerMap<State> = {
    publications:publicationReducer,
    comments:commentsReducer
};