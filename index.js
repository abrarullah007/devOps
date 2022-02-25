const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 5000;
// // create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));
// // create application/json parser
app.use(bodyParser.json());
// app.get("/", function (req, res) {
//   res.send("welcome to home page!");
// });
const controller = require("./contoller");
app.get("/products", controller.products);

app.post("/products2", function (req, res) {
  console.log("POST DATA", req.body);
  var products = [{ id: "1", product: "Chair" }];

  if (req.query.id === undefined) {
    res.send("Invalid id");
  } else {
    res.send(products);
  }
});

// // Move all routes to routes.js
// // require("./routes/routes.js")(app);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports = server;
