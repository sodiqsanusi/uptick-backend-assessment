const mongoose = require("mongoose");

let noteSchema = new mongoose.Schema({
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