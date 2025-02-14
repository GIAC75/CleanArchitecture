import { Router } from "express";
import { AuthorController } from "../controllers/AuthorController";

const router = Router();

router.post("/authors", AuthorController.createAuthor);
router.post("/authors/addBook", AuthorController.addBook);

export default router;
