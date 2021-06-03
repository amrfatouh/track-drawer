// this file is just for testing the server without connection to the port

const path = require("path");
const express = require("express");
const app = express();
app.listen(3000);

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));

let depot = [
  "30.12229, 31.3427, 100",
  "30.12226, 31.34277, 110",
  "30.12223, 31.34285, 120",
  "30.12219, 31.34296, 130",
  "30.12215, 31.34309, 140",
  "30.12214, 31.34313, 150",
  "30.12209, 31.34329, 160",
  "30.12204, 31.34339, 170",
  "30.12199, 31.3433, 180",
  "30.12192, 31.34318, 190",
];

let coordinates = [
  "30.12177, 31.34205, 0",
  "30.12185, 31.34215, 10",
  "30.1219, 31.34222, 20",
  "30.12196, 31.34229, 30",
  "30.122, 31.34233, 40",
  "30.12206, 31.34241, 50",
  "30.12212, 31.34247, 60",
  "30.12219, 31.34256, 70",
  "30.12226, 31.34264, 80",
  "30.12226, 31.34264, 90",
];

app.get("/", (req, res, next) => {
  res.render("index", {
    coord: coordinates.join(";"),
    doReload: Boolean(depot.length),
  });
  if (depot.length) {
    let x = depot[0];
    depot.shift();
    coordinates.push(x);
  }
});
