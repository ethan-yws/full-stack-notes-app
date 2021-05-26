import React from "react";
import "./NoteItem.css";

function NoteItem(props) {
    return (
        <div className="note-item">
            <span className="note-item__title">{props.title}</span>
            <br />
            <span className="note-item__content">{props.content}</span>
        </div>
    );
}

export default NoteItem;
