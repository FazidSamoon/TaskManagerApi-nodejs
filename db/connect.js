import mongoose from "mongoose";


const connectString = process.env.MONGO_URI 

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the db"))
    .catch((err) => console.log(err));
};

export default connectDB;
