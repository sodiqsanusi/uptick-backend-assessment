const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

// @desc    Get all the notes of a user
// @route   GET /api/notes/
// @access  Private
const getAllNotes = asyncHandler(async (req, res) => {
  let allNotes = await Note.find({});
  res.status(200).json(allNotes);
})

// @desc    Add a new note to the total notes of a user
// @route   POST /api/notes/
// @access  Private
const addOneNote = asyncHandler(async (req, res) => {
  const data = req.body;
  if(!data.title || !data.body){
    res.status(400);
    throw new Error("You didn't add in all necessary data to create a note")
  }

  let newNote = await Note.create(data);
  res.status(201).json(newNote);
})

// @desc    Delete all the notes of a user
// @route   DELETE /api/notes/
// @access  Private
const deleteAllNotes = asyncHandler(async (req, res) => {
  let deletedNotesCount = await Note.deleteMany({})
  res.status(200).json({
    message: "All notes created by the user has been deleted",
    ...deletedNotesCount,
  });
})

// @desc    Get a particular note of a user by ID
// @route   GET /api/notes/:id
// @access  Private
const getOneNote = asyncHandler(async (req, res) => {
  const noteID = req.params.id;
  let specificNote = await Note.findById(noteID);
  if(!specificNote){
    res.status(400);
    throw new Error("Couldn't find the specified note you requested for")
  }
  res.status(200).json(specificNote);
})

// @desc    Change the details of a particular note of a user by ID
// @route   PUT /api/notes/:id
// @access  Private
const updateOneNote = asyncHandler(async (req, res) => {
  const noteID = req.params.id;
  //* Initial check to confirm that requested note (by ID) does exist
  const specificNote = await Note.findById(noteID);
  if(!specificNote){
    res.status(400);
    throw new Error("Couldn't find the specified note you requested for")
  }

  //* Further checks to make sure request contains all necessary data required to update the note fully
  const data = req.body;
  if(!data.title || !data.body){
    res.status(400);
    throw new Error("You didn't add in all necessary data to create a note")
  }

  const updatedNote = await Note.findByIdAndUpdate(noteID, data, {new: true})
  res.status(200).json(updatedNote);
})

// @desc    Delete a particular note of a user by ID
// @route   DELETE /api/notes/:id
// @access  Private
const deleteOneNote = asyncHandler(async (req, res) => {
  const noteID = req.params.id;
  //* Initial check to confirm that requested note (by ID) does exist
  const specificNote = await Note.findById(noteID);
  if(!specificNote){
    res.status(400);
    throw new Error("Couldn't find the specified note you requested for")
  }

  let deletedNote = await Note.findByIdAndDelete(noteID);
  res.status(200).json({
    message: `Deleted note with ID: ${noteID}`,
    ...deletedNote,
  });
})


module.exports = {
  getAllNotes,
  addOneNote,
  deleteAllNotes,
  getOneNote,
  updateOneNote,
  deleteOneNote,
}