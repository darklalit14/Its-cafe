const app = require("express")();
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    return res.send("This is working fine")
})

app.listen(PORT, () => {
    console.log(`App is runnng on port http://localhost:${PORT}`)
})