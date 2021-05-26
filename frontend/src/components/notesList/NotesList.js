import React, { useEffect, useState } from "react";
import NoteItem from "../noteItem/NoteItem";
import "./NotesList.css";

function NotesList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);
    console.log(notes);

    const fetchItems = async () => {
        const data = await fetch("http://localhost:5000/notes");

        const items = await data.json();
        setNotes(items);
    };

    return (
        <div className="note-items">
            {notes.map((note) => (
                <NoteItem
                    key={note.id}
                    title={note.title}
                    content={note.content}
                />
            ))}
        </div>
    );
}

export default NotesList;
