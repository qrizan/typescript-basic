export default interface IBook<T> {
    title : string;
    category : string;
    pages : T;
    withHardCover: boolean;
}