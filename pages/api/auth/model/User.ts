const mongoose = require("mongoose");

//User schema
export const userSchema = new mongoose.Schema({
  name: { type: String, default: "User" },
  username: { type: String, unique: true },
  image: { type: String },
  email: { type: String, unique: true, require: true },
  password: { type: String },
});

// Connect to MongoDB
export const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) {
    return mongoose;
  }
  mongoose.model("User", userSchema);
  return await mongoose.connect(
    "mongodb+srv://AryanGh:%40AryanGholami11@shop.xjy2rsu.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
