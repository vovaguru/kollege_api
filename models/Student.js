const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  achievements: {
    type: String,
    default: "Нет добавленных достижений",
  },
  publications: {
    type: String,
    default: "Нет добавленных публикаций",
  }
});

module.exports = mongoose.model("Student", studentSchema);
