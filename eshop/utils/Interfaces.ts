interface ProductReview{
    rating:number,
    comment:string,
    date:string,
    reviewerName:string,
    reviewerEmail:string
}

export interface ProductType{
    id:number
    title:string,
    description:string,
    category:string,
    brand:string,
    price:number,
    rating:number,
    returnPolicy:string,
    reviews:ProductReview[]
    tags:string[]
    thumbnail:string,
    images:string[]
    stock:number
    warrantyInformation:string
    availabilityStatus:string
    //meta:[]

}