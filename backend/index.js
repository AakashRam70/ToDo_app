const express = require("express");
const { createTodo, updateTodo } = require("./types");
const PORT = 3200;
const app = express();

app.use(express.json());

app.post("/todos", function (req, res) {
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You send a wrong inputs",
        })
        return;
    }
})

app.get("/todos", function (req, res) {

})

app.post("/completed", function (req, res) {
    const upadatePayload = req.body;
    const safePayload = createTodo.safeParse(upadatePayload);
    if (!safePayload.success) {
        req.status(411).json({
            msg: "Not a valid Inputs"
        })
        return;
    }
})

app.listen(function () {
    `port is running in ${PORT}`
})