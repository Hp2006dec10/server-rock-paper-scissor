const express = require("express");
require("dotenv").config();
const cors = require("cors");
const sample = require("./routes/sample");
const auth = require("./routes/auth");
const clientHistory = require("./routes/clientHistory");
const app = express();

app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        methods: "GET, POST, PUT, DELETE",
        credentials: true
    })
);
app.use(express.json());

app.use(sample);
app.use(clientHistory);
app.use("/auth",auth);

module.exports = app;