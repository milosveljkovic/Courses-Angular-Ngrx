import { Action } from '@ngrx/store';
import {LOAD_PUBLICATIONS,LoadPublications} from '../actions/publications.action'

export default function publicationReducer(state: Publication[] = null, action: Action) {
    switch(action.type){
        case(LOAD_PUBLICATIONS): {
            const {publications} = action as LoadPublications;
            return publications;
        }
        default:
            return state;
    }
}