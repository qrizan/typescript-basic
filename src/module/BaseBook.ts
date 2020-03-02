import IBook from "./IBook";
import * as Language  from "./Language";
import { fr } from "./Language";

abstract class BaseBook<T> implements IBook<T> {
    title: string;    
    category: string;
    pages: T;
    withHardCover: boolean;

    constructor(
        title: string, 
        category: string, 
        pages: T, 
        withHardCover: boolean
    ){
        this.title = title;
        this.category = category;
        this.pages = pages;
        this.withHardCover = withHardCover;
    }

    id(): void {
        console.log("Language : " + Language.id());
    }

    en(): void {
        console.log("Language : " + Language.en());
    }    

    fr(): void {
        console.log("Language : " + fr());
    }
}

export default BaseBook;