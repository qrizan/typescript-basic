import BookA from "./BookA";
import BookB from "./BookB";

let book_a = new BookA("Category X", 100, true);
book_a.id();
console.log(book_a)

let book_b = new BookB("Cateory Z", "123 pages", false);
book_b.fr();
console.log(book_b);