import Book from "./BaseBook";

class BookB<T> extends Book<T> {
    constructor(category: string, pages: T, hardCover: boolean){
        super("BookB",category, pages, hardCover );
    }
}

export default BookB;