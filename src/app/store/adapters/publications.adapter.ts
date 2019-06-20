import {createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';

export const publicationsAdapter = createEntityAdapter<Publication>({
   sortComparer:sortById
});

export interface PublicationState {
    ids:number[],
    entities:{[key:number]:Publication}
};

function sortById(e1: Publication, e2: Publication) {
    return e2.id - e1.id
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