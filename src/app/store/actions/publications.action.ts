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
    ADD_PUBLICATION_SUCCESS='[Add publicatio Success]',
    LOAD_ALL_PUBLICATIONS='[Load All Publications]',
    LOAD_ALL_PUBLICATIONS_SUCCESS='[Load All Publications Success]',
    UPDATE_PUBLICATION='[Update Publications]',
    UPDATE_PUBLICATION_SUCCESS='[Update Publications Success]',

}

export class AddPublication implements Action{
    readonly type=PublicationsActionsTypes.ADD_PUBLICATION;
    constructor(public publication:Publication){}
}

export class AddPublicationSuccess implements Action{
    readonly type=PublicationsActionsTypes.ADD_PUBLICATION_SUCCESS;
    constructor(public publication:Publication){}
}

export class LoadAllPublications implements Action{
    readonly type=PublicationsActionsTypes.LOAD_ALL_PUBLICATIONS;
    constructor(){}
}

export class LoadAllPublicationsSuccess implements Action{
    readonly type=PublicationsActionsTypes.LOAD_ALL_PUBLICATIONS_SUCCESS;
    constructor(public publications:Publication[]){}
}

export class UpdatePublication implements Action{
    readonly type=PublicationsActionsTypes.UPDATE_PUBLICATION;
    constructor(public updatedPublications:Publication){}
}

export class UpdatePublicationSuccess implements Action{
    readonly type=PublicationsActionsTypes.UPDATE_PUBLICATION_SUCCESS;
    constructor(
        public id:number,
        public updatedPublications:Partial<Publication>
        ){}
}

export type PublicationsActions 
= AddPublicationSuccess 
| AddPublication 
| LoadAllPublicationsSuccess
| UpdatePublication
| UpdatePublicationSuccess

////////////////