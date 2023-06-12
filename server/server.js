const express = require("express"); //import express
const app = express();
const routes = require("./routes/todo");
app.use(express.json());

app.use("/", routes);

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("App is listening on port " + listener.address().port);
});
