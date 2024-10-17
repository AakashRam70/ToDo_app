const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You send a wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        Completed: false
    })

    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async function (req, res) {
    const todos = await todo.find({});
    res.json({
        todos
    })
});

app.post("/completed", async function (req, res) {
    const upadatePayload = req.body;
    const safePayload = updateTodo.safeParse(upadatePayload);
    if (!safePayload.success) {
        req.status(411).json({
            msg: "Not a valid Inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
})

app.listen(3000, function () {
    console.log("Server Started");
});