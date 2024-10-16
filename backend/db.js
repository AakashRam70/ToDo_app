const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://aakashrambhad08:ToB81AebIDyVHiK7@cluster5.gz18r.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);
module.exports = {
    todo
}