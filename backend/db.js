const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aakashrambhad08:lwpCXV1h7GUbiGJV@cluster0.teu6z.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    Completed: {
        type: Boolean,
        default: false
    }
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}

// mongodb+srv://aakashrambhad08:ToB81AebIDyVHiK7@cluster5.gz18r.mongodb.net/todos