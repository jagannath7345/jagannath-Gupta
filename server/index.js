const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/routes");
mongoose
  .connect("mongodb://127.0.0.1:27017/search-db")
  .then(() => {
    console.log("Database connected sucessfully...");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
app.use("/api", router);
app.use(express.json());
app.listen(5000, () => {
  console.log(`Server Runing at 5000`);
});
