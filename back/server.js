const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
global.__basedir = __dirname;
const app = express();

app.use(cors());

app.use(require("./routes/auth.routes"));
app.use(require("./routes/form.routes"));
app.use(require("./routes/testimonial.routes"));
app.use(require("./routes/wall.routes"));
app.use(require("./routes/testimonialForm.routes"));
app.use(require("./routes/project.routes"));

app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end(JSON.stringify(req.body, null, 2));
});
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
