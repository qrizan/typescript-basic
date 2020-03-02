import Book from "./BaseBook";

class BookA<T> extends Book<T> {
    constructor(category: string, pages: T, hardCover: boolean){
        super("BookA",category, pages, hardCover );
    }
}

export default BookA;