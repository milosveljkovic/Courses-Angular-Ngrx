import {PublicationsActions,PublicationsActionsTypes} from '../actions/publications.action';
import {PublicationState,publicationsAdapter} from '../adapters/publications.adapter'

export const initialState:PublicationState={
    ids:[],
    entities:{}
}

export function publicationReducer(state:PublicationState=initialState,action:PublicationsActions) {

    switch(action.type){
        case PublicationsActionsTypes.ADD_PUBLICATION_SUCCESS:{
            return publicationsAdapter.addOne(action.publication, state)
        }
        case PublicationsActionsTypes.LOAD_ALL_PUBLICATIONS_SUCCESS:{
            return publicationsAdapter.addAll(action.publications,state)
        }
        case PublicationsActionsTypes.UPDATE_PUBLICATION_SUCCESS:{
            return publicationsAdapter.updateOne({
                id:action.id,
                changes:action.updatedPublications
            },state)
        }
        default:
            return state;
    }
}

