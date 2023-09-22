const mongoose = require("mongoose");

export const userSchema = new mongoose.Schema({
  name: { type: String, default: "User" },
  username: { type: String, unique: true },
  email: { type: String, unique: true, require: true },
  password: { type: String },
});

// اتصال به پایگاه داده
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
