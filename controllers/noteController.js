const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

// @desc    Get all the notes of a user
// @route   GET /api/notes/
// @access  Private
const getAllNotes = asyncHandler(async (req, res) => {
  let message = "Get all the notes from a user"
  res.status(200).json({message});
})

// @desc    Add a new note to the total notes of a user
// @route   POST /api/notes/
// @access  Private
const addOneNote = asyncHandler(async (req, res) => {
  let message = "Add one note to a user's note"
  res.status(200).json({message});
})

// @desc    Delete all the notes of a user
// @route   DELETE /api/notes/
// @access  Private
const deleteAllNotes = asyncHandler(async (req, res) => {
  let message = "Delete all the notes of a user";
  res.status(200).json({message});
})

// @desc    Get a particular note of a user by ID
// @route   GET /api/notes/:id
// @access  Private
const getOneNote = asyncHandler(async (req, res) => {
  const noteID = req.params.id;
  let message = `Get a particular note of ID ${noteID} from a user`;
  res.status(200).json({message});
})

// @desc    Change the details of a particular note of a user by ID
// @route   PUT /api/notes/:id
// @access  Private
const updateOneNote = asyncHandler(async (req, res) => {
  const noteID = req.params.id;
  let message = `Update a particular note of ID ${noteID} of a user`
  res.status(200).json({message});
})

// @desc    Delete a particular note of a user by ID
// @route   DELETE /api/notes/:id
// @access  Private
const deleteOneNote = asyncHandler(async (req, res) => {
  const noteID = req.params.id;
  let message = `Delete a particular note of ID ${noteID} from a user's notes`;
  res.status(200).json({message});
})


module.exports = {
  getAllNotes,
  addOneNote,
  deleteAllNotes,
  getOneNote,
  updateOneNote,
  deleteOneNote,
}