import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

function TextEditor() {
    const [value, setValue] = useState("");
    return (
        <div className="text-editor">
            <MDEditor value={value} onChange={setValue} height="91vh" />
        </div>
    );
}

export default TextEditor;
