// /api/auth/login
import { connectToDatabase } from "../../../api-helper/util";
import { checkloginCredentials } from "../../../api-helper/controller/authentificationController";

export default async function handler(req,res){
    await connectToDatabase();
    if (req.method === "POST") {
        return checkloginCredentials(req, res);
      }
}