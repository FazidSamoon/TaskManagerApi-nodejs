import Express from "express";
import tasks from "./routes/tasks.routes.js";
import connectDB from "./db/connect.js";
import dotenv from 'dotenv'
import {notFound} from './Middleware/notFound.js'
import {errorHandler} from './Middleware/errorHandeler.js'

dotenv.config()
const app = Express();
const port = 3000;

app.use(Express.json());
app.use(Express.static("./public"))

//routes
app.use("/api/v1/tasks", tasks);

app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try {
    connectDB();
    app.listen(port, console.log(`app is listning on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
