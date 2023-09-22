const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
module.exports = mongoose.connection;
