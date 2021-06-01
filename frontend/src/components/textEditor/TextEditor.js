import React, { useState, useEffect } from "react";
import MDEditor from "@uiw/react-md-editor";

function TextEditor({ match }) {
    console.log(match.params.id);

    // Fetch the notes by id
    useEffect(() => {
        fetchNote();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match]);

    const [value, setValue] = useState("");

    const fetchNote = async () => {
        const data = await fetch(
            `http://localhost:5000/notes/${match.params.id}`
        );
        const note = await data.json();
        setValue(note.content);
    };

    return (
        <div className="text-editor">
            <MDEditor value={value} onChange={setValue} />
        </div>
    );
}

export default TextEditor;
