import Express from "express";
import tasks from "./routes/tasks.routes.js";
import connectDB from "./db/connect.js";
import dotenv from 'dotenv'

dotenv.config()
const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Express.static("./public"))

//routes


app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    connectDB();
    app.listen(port, console.log(`app is listning on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
