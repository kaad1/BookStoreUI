import { Category } from "../../category/models/category.model";

export interface AddBookPost{
    title:string;
    shortDescription:string;
    author:string;
    featuredImageUrl:string;
    urlHandle:string;
    publishedDate:Date;
    categories:string[];
}