import { Author } from "../../domain/entities/Author";
import { AuthorModel } from "./models/AuthorModel";
import { BookModel } from "./models/BookModel";
import { AuthorRepository } from "../../domain/repositories/AuthorRepository";

export class AuthorRepositorySequelize implements AuthorRepository {
  async createAuthor(author: Author): Promise<Author> {
    const newAuthor = await AuthorModel.create({ name: author.name });
    return new Author(newAuthor.id, newAuthor.name);
  }

  async getAuthorById(id: number): Promise<Author | null> {
    const author = await AuthorModel.findByPk(id, { include: [{ model: BookModel, as: "books" }] });
    if (!author) return null;
    return new Author(author.id, author.name, author.books?.map((b) => b.id) || []);
  }

  async addBookToAuthor(authorId: number, bookId: number): Promise<void> {
    const author = await AuthorModel.findByPk(authorId);
    const book = await BookModel.findByPk(bookId);
    if (author && book) {
      await (author as any).$add("books", book); // Agregar el libro a la relación
    }
  }
}
