import { Book } from "../../domain/entities/Book";
import { BookModel } from "./models/BookModel";
import { AuthorModel } from "./models/AuthorModel";
import { BookRepository } from "../../domain/repositories/BookRepository";

export class BookRepositorySequelize implements BookRepository {
  async createBook(book: Book): Promise<Book> {
    const newBook = await BookModel.create({ title: book.title });
    return new Book(newBook.id, newBook.title);
  }

  async getBookById(id: number): Promise<Book | null> {
    const book = await BookModel.findByPk(id, { include: [{ model: AuthorModel, as: "authors" }] });
    if (!book) return null;
    return new Book(book.id, book.title, book.authors?.map((a) => a.id) || []);
  }

  async addAuthorToBook(bookId: number, authorId: number): Promise<void> {
    const book = await BookModel.findByPk(bookId);
    const author = await AuthorModel.findByPk(authorId);
    if (book && author) {
      await (book as any).$add("authors", author); // Agregar el autor a la relación
    }
  }
}
