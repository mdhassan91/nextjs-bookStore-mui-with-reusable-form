import {
  addBook,
  getAllBooks,
} from "../../api-helper/controller/bookController";
import { connectToDatabase } from "../../api-helper/util";

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === "GET") {
    return getAllBooks(req, res);
  } else if (req.method === "POST") {
    return addBook(req, res);
  }
}
