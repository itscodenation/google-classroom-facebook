const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("google classroom facebook"));

app.get("/photos", (req, res) => {
    res.json([
        { name: "a", picture: "https://placekitten.com/g/200/300" },
        { name: "b", picture: "https://placekitten.com/g/202/300" },
        { name: "c", picture: "https://placekitten.com/g/201/300" },
        { name: "d", picture: "https://placekitten.com/g/203/300" },
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
