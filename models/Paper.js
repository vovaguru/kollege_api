const mongoose = require("mongoose");

// Individual Paper in a Course
const paperSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  paper: {
    type: String,
    required: true,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: [],
    },
  ],
  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Staff",
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      default: [],
    },
  ],
  category: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Paper", paperSchema);
