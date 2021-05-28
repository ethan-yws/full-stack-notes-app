import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

function TextEditor({ match }) {
    console.log(match.params.id);
    const [value, setValue] = useState("");

    // Fetch the notes by id
    useEffect(() => {
        fetchNote();
    }, []); // <-- effects once since we need make changes on the content

    const fetchNote = async () => {
        try {
            const data = await fetch(
                `http://localhost:5000/notes/${match.params.id}`
            );
            const note = await data.json();
            setValue(note.content);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="text-editor">
            <MDEditor value={value} onChange={setValue} height="91vh" />
        </div>
    );
}

export default TextEditor;
