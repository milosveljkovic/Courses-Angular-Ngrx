import { Action } from '@ngrx/store';

export const LOAD_PUBLICATIONS = "[Load publications]"; 

export class LoadPublications implements Action{
    type = LOAD_PUBLICATIONS;
    constructor(public publications: Publication[]) {}
}
