import React, { useState } from "react";
import "./NoteItem.css";

function NoteItem(props) {
    // const [selectd, setSelected] = useState(false);

    // const handleSelect = () => {
    //     setSelected(true);
    // };

    return (
        <div
            className="note-item"
            // style={{
            //     backgroundColor: props.selected
            //         ? "rgb(246, 246, 246)"
            //         : "rgb(252, 251, 252)",
            // }}
            // onClick={handleSelect}
        >
            <span className="note-item__title">{props.title}</span>
            <br />
            <span className="note-item__content">
                {/* formatting preview content by limiting initial 30 chars */}
                {props.content.slice(0, 30).match(/[a-zA-Z0-9\s]/g)} ...
            </span>
        </div>
    );
}

export default NoteItem;
