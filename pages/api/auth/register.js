// /api/auth/register
import { connectToDatabase } from "../../../api-helper/util";
import {  registerUser } from "../../../api-helper/controller/authentificationController";

export default async function handler(req,res){
    await connectToDatabase();
    if (req.method === "POST") {
        return  registerUser(req, res);
      }
} 