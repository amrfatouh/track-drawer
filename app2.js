// this file is just for testing the server without connection to the port

const path = require("path");
const express = require("express");
const app = express();
app.listen(3000);

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

let coordinates = [
  "30.12177, 31.34205",
  "30.12185, 31.34215",
  "30.1219, 31.34222",
  "30.12196, 31.34229",
  "30.122, 31.34233",
  "30.12206, 31.34241",
  "30.12212, 31.34247",
  "30.12219, 31.34256",
  "30.12226, 31.34264",
  "30.12226, 31.34264",
  "30.12229, 31.3427",
  "30.12226, 31.34277",
  "30.12223, 31.34285",
  "30.12219, 31.34296",
  "30.12215, 31.34309",
  "30.12214, 31.34313",
  "30.12209, 31.34329",
  "30.12204, 31.34339",
  "30.12199, 31.3433",
  "30.12192, 31.34318",
];

app.get("/", (req, res, next) => {
  res.render("index", { coord: coordinates.join(";") });
});
