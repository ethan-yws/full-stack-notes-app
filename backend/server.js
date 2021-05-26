require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// Setup server to accept JSON
app.use(express.json());

// Tell the server to use routes we created
const notesRouter = require("./routes/notes");
app.use("/notes", notesRouter);

app.listen(5000, () => {
    console.log("Server started");
});
