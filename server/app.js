const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const PORT = 5005;

// STATIC DATA
// Devs Team - Import the provided files with JSON data of students and cohorts here:
// ...

// INITIALIZE EXPRESS APP - https://expressjs.com/en/4x/api.html#express
const app = express();

// MIDDLEWARE
// Research Team - Set up CORS middleware here:
// ...
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173"] }));

// ROUTES - https://expressjs.com/en/starter/basic-routing.html
// Devs Team - Start working on the routes here:
// ...
app.get("/docs", (req, res) => {
    res.sendFile(__dirname + "/views/docs.html");
});

// GET /api/cohorts - This route should return a JSON response with all the cohorts. Use the data provided in the cohorts.json file. For instructions on using res.json, check Express - res.json.
const cohorts = require("./cohorts.json");

app.get("/api/cohorts", (req, res, next) => {
    res.json(cohorts);
    console.log(cohorts);
});

// GET /api/students - This route should return a JSON response with all the students. Use the data provided in the students.json file.

const students = require("./students.json");

app.get("/api/students", (req, res, next) => {
    res.json(students);
    console.log(students);
});

// START SERVER
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
