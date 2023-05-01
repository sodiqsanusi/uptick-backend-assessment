const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  addOneNote,
  deleteAllNotes,
  getOneNote,
  updateOneNote,
  deleteOneNote,
} = require("../controllers/noteController");
const protect = require("../middleware/authMiddleware");


router.route("/")
  .get(protect, getAllNotes)
  .post(protect, addOneNote)
  .delete(protect, deleteAllNotes);


router.route("/:id")
  .get(protect, getOneNote)
  .put(protect, updateOneNote)
  .delete(protect, deleteOneNote);

module.exports = router;