import { Action } from '@ngrx/store';

export enum UserActionsTypes{
    LOAD_USER='[Load User]',
    LOAD_USER_SUCCESS='[Load User Success]',
    ADD_TO_MY_PUBLICATIONS='[Add To My Publications]',
    ADD_TO_MY_PUBLICATIONS_SUCCESS='[Add To My Publications Success]',
    USER_LOGOUT='[User Logout]'
}

export class LoadUser implements Action{
    readonly type=UserActionsTypes.LOAD_USER;
    constructor(public id:number){}
}

export class LoadUserSuccess implements Action{
    readonly type=UserActionsTypes.LOAD_USER_SUCCESS;
    constructor(public user:User){}
}

export class AddToMyPublication implements Action{
    readonly type=UserActionsTypes.ADD_TO_MY_PUBLICATIONS;
    constructor(public user:User){}
}

export class AddToMyPublicationSuccess implements Action{
    readonly type=UserActionsTypes.ADD_TO_MY_PUBLICATIONS_SUCCESS;
    constructor(public user:User){}
}

export class UserLogout implements Action{
    readonly type=UserActionsTypes.USER_LOGOUT;
    constructor(){}
}

export type UserActions 
= LoadUser 
| LoadUserSuccess
| AddToMyPublication
| AddToMyPublicationSuccess
| UserLogout;

////////////////