import React, { useEffect, useState } from "react";
import NoteItem from "../noteItem/NoteItem";
import "./NotesList.css";
import { Link } from "react-router-dom";

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
                <Link
                    key={note._id}
                    to={`/note/${note._id}`}
                    style={{ textDecoration: "none" }}
                >
                    <NoteItem title={note.title} content={note.content} />
                </Link>
            ))}
        </div>
    );
}

export default NotesList;
