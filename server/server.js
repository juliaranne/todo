require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes/todo");
const mongoose = require("mongoose");
app.use(express.json());

app.use("/", routes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port " + listener.address().port);
});

//establish connection to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
