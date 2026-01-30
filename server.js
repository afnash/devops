const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => res.send("TEAM rYgYtsusuahaa"));
app.get("/health", (req, res) => res.json({ status: "ok", version: "v1" }));

app.listen(PORT, "0.0.0.0", () => {
    console.log(`[${new Date().toISOString()}] Server is running on port ${PORT}`);
});
