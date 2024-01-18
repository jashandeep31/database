const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "fiberx.json"));
});

app.listen(8000, () => {
  console.log("server is running");
});
