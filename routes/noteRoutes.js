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

router.route("/")
  .get(getAllNotes)
  .post(addOneNote)
  .delete(deleteAllNotes);


router.route("/:id")
  .get(getOneNote)
  .put(updateOneNote)
  .delete(deleteOneNote);

module.exports = router;