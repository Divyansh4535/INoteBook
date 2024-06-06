import React, { useContext, useEffect } from "react";
import noteContext from "../Context/notes/noteContext";
import NoteItem from "./NoteItem";
import Addnote from "./Addnote";

const Notes = () => {
    const context = useContext(noteContext);
    const { Notes , getNotes} = context;
    useEffect(() => {
      getNotes()
    },[])

    return (
        <>
        <Addnote/>
        <div className="m-5">
            <h2 className="my-5 text-5xl font-bold text-center">Your Notes </h2>
            <div className="flex flex-wrap justify-center items-center">
                {Notes.map((item, index) => {
                    return (
                        <NoteItem Notes={item} />
                    );
                })}
            </div>
        </div>
                </>
    );
};

export default Notes;
