import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true 
  },
  completed: {
    type: Boolean,
    default:false
  },
});

const Model = mongoose.model("Task", TaskSchema);
export default Model;
