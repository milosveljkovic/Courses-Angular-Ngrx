import { Action } from '@ngrx/store';

// export const LOAD_PUBLICATIONS = "[Load publications]"; 
// export const ADD_PUBLICATION = "[Add publication]"; 

// export class LoadPublications implements Action{
//     type = LOAD_PUBLICATIONS;
//     constructor(public publications: Publication[]) {}
// }

// export class AddPublication implements Action{
//     type = ADD_PUBLICATION;
//     constructor(public publication: Publication) {}
// }

////////////////
export enum PublicationsActionsTypes{
    ADD_PUBLICATION='[Add Publication]',
    ADD_ALL_PUBLICATIONS='[Add All Publications]'
}

export class AddPublication implements Action{
    readonly type=PublicationsActionsTypes.ADD_PUBLICATION;
    constructor(public publication:Publication){}
}

export class AddAllPublications implements Action{
    readonly type=PublicationsActionsTypes.ADD_ALL_PUBLICATIONS;
    constructor(public publications:Publication[]){}
}

export type PublicationsActions =
AddPublication
|AddAllPublications;

////////////////