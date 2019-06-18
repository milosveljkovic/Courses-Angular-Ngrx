import { Action } from '@ngrx/store';
// import {LOAD_PUBLICATIONS,LoadPublications,ADD_PUBLICATION,AddPublication} from '../actions/publications.action'

// export default function publicationReducer(state: Publication[] = null, action: Action) {
//     switch(action.type){
//         case(LOAD_PUBLICATIONS): {
//             const {publications} = action as LoadPublications;
//             return publications;
//         }
//         case(ADD_PUBLICATION): {
//             const {publication} = action as AddPublication;
//             return [...state,publication];
//         }
//         default:
//             return state;
//     }
// }

///////////////////
import {PublicationsActions,PublicationsActionsTypes} from '../actions/publications.action';
import {createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

export const publicationsAdapter = createEntityAdapter<Publication>({
   sortComparer:sortById
});

export interface PublicationState {
    ids:number[],
    entities:{[key:number]:Publication}
};

export const initialState:PublicationState={
    ids:[],
    entities:{}
}

function sortById(e1: Publication, e2: Publication) {
    return e2.id - e1.id
}

export function publicationReducer(state:PublicationState=initialState,action:PublicationsActions) {

    switch(action.type){
        case PublicationsActionsTypes.ADD_PUBLICATION_SUCCESS:{
            return publicationsAdapter.addOne(action.publication, state)
        }
        case PublicationsActionsTypes.LOAD_ALL_PUBLICATIONS_SUCCESS:{
            console.log("LOAD_ALL_PUBLICATIONS_SUCCESS");
            return publicationsAdapter.addAll(action.publications,state)
        }
        case PublicationsActionsTypes.UPDATE_PUBLICATION_SUCCESS:{
            console.log("UPDATE_PUBLICATION_SUCCESS");
            return publicationsAdapter.updateOne({
                id:action.id,
                changes:action.updatedPublications
            },state)
        }
        default:
            return state;
    }
}

export const getCommentState= createFeatureSelector<PublicationState>('publications');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = publicationsAdapter.getSelectors(getCommentState);  //u zagradi je bilo getCommentState

export const selectAllPublications=selectAll;
export const selectTotalPublications=selectTotal;
