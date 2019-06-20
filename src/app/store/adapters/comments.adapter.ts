import {createEntityAdapter} from '@ngrx/entity';
import {createFeatureSelector} from '@ngrx/store';
import { myComment } from 'src/app/models/MyComment';


export const commentsAdapter = createEntityAdapter<myComment>({
   sortComparer:sortByDate
});

export interface CommentsState {
    ids:number[],
    entities:{[key:number]:myComment}
};

function sortByDate(e1: myComment, e2: myComment) {
    return Number(e2.dateOfPublish) - Number(e1.dateOfPublish)
}

export const getCommentState= createFeatureSelector<CommentsState>('comments');

const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal
} = commentsAdapter.getSelectors(getCommentState);  //u zagradi je bilo getCommentState

export const selectAllComments=selectAll;
export const selectTotalComments=selectTotal;