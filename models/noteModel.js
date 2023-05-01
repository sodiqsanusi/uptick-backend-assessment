const mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: [true, "Add note title!"],
  },
  body: {
    type: String,
    required: [true, "Add a body to your notes!"],
  }
}, {
  timestamps: true,
})

module.exports = mongoose.model("Note", noteSchema);