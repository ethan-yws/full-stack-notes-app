import React from "react";
import styled from "styled-components";

const NoteItemContainer = styled.div`
    border-radius: 5px;
    background-color: whitesmoke;
    padding: 10px;
    width: 80%;

    .note-created-date {
        font-size: 0.8em;
        font-weight: bolder;
        color: lightslategray;
    }

    .note-title {
        color: grey;
        font-weight: 500;
    }

    & p {
        font-size: 0.8em;
    }
`;

function NoteItem(props) {
    return (
        <NoteItemContainer>
            <span className="note-created-date">
                {new Date(props.createdDate).toLocaleDateString()}
            </span>
            <br />
            <span className="note-title">{props.title}</span>
            <p>{props.content.slice(0, 30).match(/[a-zA-Z0-9\s]/g)} ...</p>
        </NoteItemContainer>
    );
}

export default NoteItem;
