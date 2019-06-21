interface User{
    id?:number;
    email:string;
    password:string;
    name:string;
    mypublications?:number[],
    mycomments?:number[]
}