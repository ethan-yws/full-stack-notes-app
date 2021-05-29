import React from "react";
import "./NoteItem.css";

function NoteItem(props) {
    return (
        <div className="note-item">
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
