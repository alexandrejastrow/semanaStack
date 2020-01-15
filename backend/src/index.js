const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require("cors");
const app = express();

mongoose.connect(
  "mongodb+srv://alexandrejastrow:32413539@cluster0-mgqfz.mongodb.net/week10?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);
app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen(3333);
