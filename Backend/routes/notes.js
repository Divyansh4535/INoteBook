const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const Notes = require("../models/Notes");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// ROUTE 1: GET all the notes  using : GET "/api/notes/fetchAllNotes" .  login requires

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
    // res.json([])
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send("Internal server Error");
  }
});

// ROUTE 2: Add a new Notes  using : POST "/api/notes/addnotes" .  loginrequires
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a Title").isLength({ min: 3 }),
    body(
      "description",
      "Enter a atleast 5 charactors in  Description "
    ).isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      //if theere are errors , return bad request and the error
      const { title, description, tag } = req.body;
      const error = validationResult(req);
      if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
      }
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      console.error("error", error.message);
      res.status(500).send("Internal server Error");
    }
    // res.json([])
  }
);

// ROUTE 3: Update an existing  Notes  using : PUT "/api/notes/updaatenote" .  login requires

router.put("/updatenote/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    // create new notes object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    //find the note to be updated and update it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json({ note });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send("Internal server Error");
  }
});
// ROUTE 4 : Delete an existing  Notes  using : DELETE  "/api/notes/deletenote" .  login requires

router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    //find the note to be deleted and delete it
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(404).send("Not Found");
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", note: note });
  } catch (error) {
    console.error("error", error.message);
    res.status(500).send("Internal server Error");
  }
});
module.exports = router;
