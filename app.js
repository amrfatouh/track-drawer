// ===================
// WORKING WITH PORT
// ===================

// Import dependencies
const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const ByteLength = require("@serialport/parser-byte-length");

// Defining the serial port
var port = new SerialPort("COM9", {
  baudRate: 9600,
});

let coordinates = [];

// Read the data from the serial port
const parser = port.pipe(new Readline());
parser.on("data", (char) => {
  console.log(char);
  coordinates.push(char.split(",").map((x) => +x));
});

// ===================
// WORKING WITH SERVER
// ===================
const express = require("express");
const app = express();
app.listen(3000);

app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index", { coord: coordinates.join(";") });
});
