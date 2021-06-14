require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

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

// Configuring CORS
let corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());

// Tell the server to use routes we created
const notesRouter = require("./routes/notes");
app.use("/notes", notesRouter);

app.listen(5000, () => {
    console.log("Server started");
});
