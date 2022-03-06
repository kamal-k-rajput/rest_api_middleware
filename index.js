const express = require("express");

const app = express();

app.listen(3500, () => {
  console.log("Listning to the port 3500.");
});

app.get("/", logger, (req, res) => {
  res.send("try /books");
});
app.get("/books", logger, (req, res) => {
  res.send("to know about books write /bookname");
});
function logger(req, res, next) {
  console.log("Fetching all books.");
  next();
}
