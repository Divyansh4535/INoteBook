import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const NotesInitial = [];
  const [Notes, setNotes] = useState(NotesInitial);

  // =>> Get a Note
  const getNotes = async () => {
    // API Call
    const respons = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MmQwNDZkZmFhMjY4MzE0ODNmYjMyIn0sImlhdCI6MTcxNjcxNDE2N30.zw2orRZNaEDOOzGMqbu9Qj671zI8i0YBGCB_6tiVoIQ",
      },
    });
    const json = await respons.json();
    console.log("json", json);
    setNotes(json);
  };

  // ==> Add a Note
  const addNote = async (Title, Description, Tags) => {
    // API Call
    const respons = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MmQwNDZkZmFhMjY4MzE0ODNmYjMyIn0sImlhdCI6MTcxNjcxNDE2N30.zw2orRZNaEDOOzGMqbu9Qj671zI8i0YBGCB_6tiVoIQ",
      },
      body: JSON.stringify({ Title, Description, Tags }),
    });

    const json = respons.json();
    const note = {
      _id: "6655da1c2b9f63ced2fc81e1",
      user: "6652d046uudfaa26831483fb32",
      title: Title,
      description: Description,
      tag: Tags,
      __v: 0,
    };
    setNotes(Notes.concat(note));
  };

  // ==>> Delete a Note
  const deleteNote = async (id) => {
    const respons = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "aplication/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MmQwNDZkZmFhMjY4MzE0ODNmYjMyIn0sImlhdCI6MTcxNjcxNDE2N30.zw2orRZNaEDOOzGMqbu9Qj671zI8i0YBGCB_6tiVoIQ",
      },
    });
    const json = await respons.json();
    console.log("json", json);
    // setNotes(json);
    console.log("deleting note is " + id);
    const newnote = Notes.filter((note) => {
      return note._id != id;
    });
    setNotes(newnote);
  };

  // ==>>Edit a Note
  const editNote = async (id, Title, Description, Tags) => {
    // API Call
    const respons = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1MmQwNDZkZmFhMjY4MzE0ODNmYjMyIn0sImlhdCI6MTcxNjcxNDE2N30.zw2orRZNaEDOOzGMqbu9Qj671zI8i0YBGCB_6tiVoIQ",
      },
      body: JSON.stringify({ Title, Description, Tags }),
    });
    const json = respons.json();
    // logic to edit in client
    for (let index = 0; index < Notes.length; index++) {
      const element = Notes[index];
      if (element._id === id) {
        element.Title = Title;
        element.Description = Description;
        element.Tags = Tags;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ Notes, setNotes, getNotes, addNote, editNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
