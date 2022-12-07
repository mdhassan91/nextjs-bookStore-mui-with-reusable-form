// /api/book/id

import { updateBook,deleteBook, getBookById } from "../../../api-helper/controller/bookController";
import { connectToDatabase } from "../../../api-helper/util";


export default async function handler(req, res) {
    await connectToDatabase();
  
    if (req.method === "PUT") {
      return updateBook(req, res);
    } else if (req.method === "DELETE") {
      return deleteBook(req, res);
    }else if (req.method === "GET") {
        return getBookById(req, res);
      }
  }