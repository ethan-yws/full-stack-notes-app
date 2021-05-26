import React, { useEffect, useState } from "react";

function NoteItems() {
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
                <div key={note.id}>
                    <span>{note.title}</span>
                    <span>{note.content}</span>
                </div>
            ))}
        </div>
    );
}

export default NoteItems;
