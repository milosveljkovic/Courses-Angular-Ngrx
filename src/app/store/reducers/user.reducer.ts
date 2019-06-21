import {UserActions,UserActionsTypes, LoadUserSuccess,AddToMyPublicationSuccess} from '../actions/user.action';


export function userReducer(state:User=null,action:UserActions) {

    switch(action.type){
        case UserActionsTypes.LOAD_USER_SUCCESS:{
            const {user} = action as LoadUserSuccess;
            console.log(user)
            state=user[0];
            return state;
        }
        case UserActionsTypes.ADD_TO_MY_PUBLICATIONS_SUCCESS:{
            const {user} = action as AddToMyPublicationSuccess;
            console.log(user)
            return user;
        }
        case UserActionsTypes.USER_LOGOUT:{
            return null;
        }
        default:
            return state;
    }
}

