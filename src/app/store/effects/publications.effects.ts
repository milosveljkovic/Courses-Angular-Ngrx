import { Injectable } from '@angular/core';
import {Effect,Actions, ofType, createEffect} from '@ngrx/effects';
import {PublicationService} from '../../services/publication.service';

import {map,mergeMap} from 'rxjs/operators';
import { Observable } from 'rxjs';

import {PublicationsActionsTypes,AddPublication, UpdatePublication} from '../actions/publications.action'

@Injectable()
export class PublicationsEffects{

    constructor(private actions$:Actions,private publicationService:PublicationService){}

    getPublications=createEffect(()=>
        this.actions$.pipe(
            ofType(PublicationsActionsTypes.LOAD_ALL_PUBLICATIONS),
            mergeMap(()=>this.publicationService.getAllPublications()
            .pipe(
                map(publications=>({
                    type:PublicationsActionsTypes.LOAD_ALL_PUBLICATIONS_SUCCESS,
                    publications:publications
                }))
                )
            )
        )
    )

    addPublication=createEffect(()=>
    this.actions$.pipe(
        ofType<AddPublication>(PublicationsActionsTypes.ADD_PUBLICATION),
        map((action)=>action.publication),
        mergeMap((newPublication)=>this.publicationService.postPublication(newPublication)
        .pipe(
            map((publication)=>({
                type:PublicationsActionsTypes.ADD_PUBLICATION_SUCCESS,
                publication:publication
            }))
            )
        )
        )
    )

    updatePublication=createEffect(()=>
    this.actions$.pipe(
        ofType<UpdatePublication>(PublicationsActionsTypes.UPDATE_PUBLICATION),
        map((action)=>action.updatedPublications),
        mergeMap((updatedPublications)=>this.publicationService.putPublication(updatedPublications)
        .pipe(
            map((publication)=>({
                type:PublicationsActionsTypes.UPDATE_PUBLICATION_SUCCESS,
                id:publication.id,
                updatedPublications:publication
            }))
            )
        )
        )
    )

}