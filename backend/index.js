const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const PORT = 3200;
const app = express();

app.use(express.json());

app.post("/todos", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You send a wrong inputs",
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
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
    const safePayload = createTodo.safeParse(upadatePayload);
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

app.listen(function () {
    `port is running in ${PORT}`
})