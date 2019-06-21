interface Publication{
    id:number,
    title:string,
    location:string,
    price:number,
    newPrice?:number,
    duration:string,
    isAvailable:boolean,
    onSale:boolean,
    description:string,
    imageUrl?:string,
    rating:{
        votersRatingSum:number,
        numberOfVoters:number
    },
    publisher:string
}