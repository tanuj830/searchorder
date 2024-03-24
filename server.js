const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const customer = require("./routes/customer");
const orders = require("./routes/order");
app.use(express.json());
const path = require("path");
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful");
  });

app.use(
  cors({
    origin: "*",
    allowedHeaders: "X-Requested-With, Content-Type, Authorization",
    methods: "GET, POST, PATCH, PUT, POST, DELETE, OPTIONS",
  })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.use("/customer", customer);
app.use("/order", orders);

app.listen(process.env.PORT || 8000, () => {
  "Server connected successfully";
});
