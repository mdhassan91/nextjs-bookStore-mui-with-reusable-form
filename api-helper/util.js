import mongoose from "mongoose";

const Mongo_Url="mongodb+srv://hassan:mdhassan@cluster0.lefdx.mongodb.net/book-store"
const Mongo_UrlOne="mongodb://localhost:27017/book-store"
export const connectToDatabase = async () => {
  // if(mongoose.connections[0]){
  //   return;
  // }
  await mongoose
    .connect(Mongo_UrlOne)
    .then(() => console.log("connected"))
    .catch((err) => console.log(err));
};
