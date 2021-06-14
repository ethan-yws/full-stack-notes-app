import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NoteItem from "./NoteItem";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const NotesListContainer = styled.div`
    flex: 0.25;
    height: 100vh;
    overflow: scroll;
    border-right: 2px solid whitesmoke;

    .note-items-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1vh;
        margin-top: 1em;
    }

    Button {
        width: 80%;
        margin-left: 17px;
        text-transform: capitalize;
        font-size: 0.8em;
    }
`;

const Title = styled.div`
    font-size: 2em;
    text-align: left;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    /* align-items: left; */
`;

function NotesList() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const data = await fetch("http://localhost:5000/notes");
        const notes = await data.json();
        setNotes(notes);
    };

    return (
        <NotesListContainer>
            <Title>My Notes</Title>
            <Button variant="contained" startIcon={<AddIcon />}>
                Add new note
            </Button>
            <div className="note-items-container">
                {notes.map((note) => (
                    <Link
                        key={note._id}
                        to={`/note/${note._id}`}
                        style={{ textDecoration: "none" }}
                    >
                        <NoteItem
                            createdDate={note.createdDate}
                            title={note.title}
                            content={note.content}
                        />
                    </Link>
                ))}
            </div>
        </NotesListContainer>
    );
}

export default NotesList;
