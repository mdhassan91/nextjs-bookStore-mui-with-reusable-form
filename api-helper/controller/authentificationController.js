import Admins from "../model/Admins";

export const checkloginCredentials = async (req,res) => {
  const { email, password } = req.body;
  console.log(email, password);
  let admindb;
  try {
    console.log("Checking credentials...");
    admindb = await Admins.findOne({ email: email, password: password });
    if (admindb) {
      const temp = {
       
        name: admindb.name,
        email: admindb.email,
        isAdmin: admindb.isAdmin,
      };
      console.log("Credentials checked");
      res.send(temp);
    } else {
      return res.status(404).json({ message: "Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const registerUser = async (req,res) => {
  let user;
  try {
    console.log("Registering  User Document");
    user = await Admins.create(req.body);
    console.log("Register User");
    return res.send({ user });
  } catch (error) {
    console.log("Error creating", error);
    res.send({ error });
  }
}
