const mongoose = require("mongoose");

const connectDB = async () => {
  const dbStr = "mongodb+srv://sanzharb02:2WSJMzcRB0K7cWHi@diplomcluster.hpd6jb1.mongodb.net/?retryWrites=true&w=majority&appName=diplomCluster";
  try {
    await mongoose.connect(dbStr);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
