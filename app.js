import Express from "express";
import tasks from "./routes/tasks.routes.js";
import connectDB from "./db/connect.js";
const app = Express();
const port = 3000;

app.use(Express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("task manager app");
});

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    console.log("urii" ,process.env.MONGO_URI);
    await connectDB();
    app.listen(port, console.log(`app is listning on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
