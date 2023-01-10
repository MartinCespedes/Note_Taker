// Import express package
const express = require("express");
const path = require("path");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Require the JSON file and assign it to a variable called `termData`
const { request } = require("http");
const termData = require("./terms.json");
const PORT = process.env.PORT || 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));

const parsedNotes = Json.parse(Notes);
console.info("parsed notes", parsedNotes);

// route for notes
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
