import {CommentsActions, CommentsActionsTypes} from '../actions/comments.action';
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

// interface EntityState<myComment> {
//     ids: string[] | number;
//     entities: { [id: string|number]: myComment };
//   }

// There are two primary reasons we maintain a list of ids and a dictionary of entities:

// 1.We want to make looking up a specific entity really fast.
//  If you wanted to just select one book from the store, using the entities dictionary is much faster than searching //through an array
// 2.We also want to maintain the order of the list. 
//This is especially important if you want to keep the list sorted

// const defaultComments={
//     ids:[1,2],
//     entities:{
//         1:{
//             id:1,
//             name:"test1",
//             email:"test2",
//             comment:"testtestest"
//         },
//         2:{
//             id:2,
//             name:"Test",
//             email:"test@test.com",
//             comment:"test"
//         }
//     }
// }
export const initialState:CommentsState={
    ids:[],
    entities:{}
}

function sortByDate(e1: myComment, e2: myComment) {
    return Number(e2.dateOfPublish) - Number(e1.dateOfPublish)
}

export function commentsReducer(state:CommentsState=initialState,action:CommentsActions) {

    switch(action.type){
        case CommentsActionsTypes.ADD_ONE:{
            return commentsAdapter.addOne(action.mycomment, state)
        }
        case CommentsActionsTypes.ADD_All:{
            console.log("ADD ALL");
            return commentsAdapter.addAll(action.mycomments, state)
        }
        default:
            return state;
    }
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


/*So what boilerplate did we save?

1.No longer have to explicitly declare all of the properties for the state interface
2.The implementation for adding, deleting, or updating entities in the state are all handled by the adapter.
3.The adapter generates a set of commonly used selectors for you.*/