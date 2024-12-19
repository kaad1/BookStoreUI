import { Category } from "../../category/models/category.model";

export interface BookPost{
    id:string;
    title:string;
    shortDescription:string;
    author:string;
    featuredImageUrl:string;
    urlHandle:string;
    publishedDate:Date;
    categories: Category[];
}