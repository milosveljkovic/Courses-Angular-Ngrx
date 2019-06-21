import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {UserService} from '../../services/user.service';

import {map,mergeMap} from 'rxjs/operators';

import {UserActionsTypes,LoadUser, AddToMyPublication, AddToMyComments} from '../actions/user.action'

@Injectable()
export class UserEffects{

    constructor(private actions$:Actions,private userService:UserService){}

    getUserById=createEffect(()=>
    this.actions$.pipe(
        ofType<LoadUser>(UserActionsTypes.LOAD_USER),
        map((action)=>action.id),
        mergeMap((id)=>this.userService.GetUserById(id)
        .pipe(
            map((user)=>({
                type:UserActionsTypes.LOAD_USER_SUCCESS,
                user:user
            }))
            )
        )
        )
    )

    addToMyPublications=createEffect(()=>
    this.actions$.pipe(
        ofType<AddToMyPublication>(UserActionsTypes.ADD_TO_MY_PUBLICATIONS),
        map((action)=>action.user),
        mergeMap((user)=>this.userService.updateUser(user)
        .pipe(
            map((user)=>({
                type:UserActionsTypes.ADD_TO_MY_PUBLICATIONS_SUCCESS,
                user:user
            }))
            )
        )
        )
    )

    addToMyComments=createEffect(()=>
    this.actions$.pipe(
        ofType<AddToMyComments>(UserActionsTypes.ADD_TO_MY_COMMENTS),
        map((action)=>action.user),
        mergeMap((user)=>this.userService.updateUser(user)
        .pipe(
            map((user)=>({
                type:UserActionsTypes.ADD_TO_MY_COMMENTS_SUCCESS,
                user:user
            }))
            )
        )
        )
    )
}