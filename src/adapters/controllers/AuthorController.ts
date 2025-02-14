import { Request, Response } from "express";
import { CreateAuthor } from "../../usecases/author/CreateAuthor";
import { AddBookToAuthor } from "../../usecases/author/AddBookToAuthor";
import { AuthorRepositorySequelize } from "../database/AuthorRepositorySequelize";

const authorRepository = new AuthorRepositorySequelize();
const createAuthorUseCase = new CreateAuthor(authorRepository);
const addBookToAuthorUseCase = new AddBookToAuthor(authorRepository);

export class AuthorController {
  static async createAuthor(req: Request, res: Response) {
    const { name } = req.body;
    const author = await createAuthorUseCase.execute(name);
    res.status(201).json(author);
  }

  static async addBook(req: Request, res: Response) {
    const { authorId, bookId } = req.body;
    await addBookToAuthorUseCase.execute(authorId, bookId);
    res.json({ message: "Libro agregado al autor" });
  }
}
