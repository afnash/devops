const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello guys its working"));
app.get("/health", (req, res) => res.json({ status: "ok", version: "v1" }));

app.listen(PORT, "0.0.0.0", () => console.log("Running on " + PORT));
