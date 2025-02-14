import { Book } from "../entities/Book";

export interface BookRepository {
  createBook(book: Book): Promise<Book>;
  getBookById(id: number): Promise<Book | null>;
  addAuthorToBook(bookId: number, authorId: number): Promise<void>;
}
