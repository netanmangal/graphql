import express from "express";
const app = express();

app.get("/", (req, res, next) => {
    res.status(200).send("Welcome to homepage");
});

app.listen(3000, () => {
    console.log("Server up and running on port 3000");
});