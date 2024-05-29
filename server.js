var express = require("express");
var app = express();
const catsRouter = require("./routes/cats");
var port = process.env.port || 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/cats", catsRouter);

app.listen(port, () => {
  console.log("App listening to: " + port);
});
