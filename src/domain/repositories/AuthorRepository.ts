import { Author } from "../entities/Author";

export interface AuthorRepository {
  createAuthor(author: Author): Promise<Author>;
  getAuthorById(id: number): Promise<Author | null>;
  addBookToAuthor(authorId: number, bookId: number): Promise<void>;
}
