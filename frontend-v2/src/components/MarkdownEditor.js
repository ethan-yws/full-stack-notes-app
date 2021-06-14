import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MDEditor from "@uiw/react-md-editor";
import SyncIcon from "@material-ui/icons/Sync";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const MarkdownEditorContainer = styled.div`
    flex: 0.6;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: lightblue; */
    .markdown-editor {
        margin-top: 1em;
        width: 90%;
    }
`;

const HeaderBar = styled.div`
    display: flex;
`;

const Title = styled.span`
    text-decoration: underline;
`;

function MarkdownEditor({ match }) {
    const [value, setValue] = useState("**Hello world!!!**");

    useEffect(() => {
        fetchNote();
        // eslint-disable-next-line
    }, [match]);

    const fetchNote = async () => {
        const data = await fetch(
            `http://localhost:5000/notes/${match.params.id}`
        );
        const note = await data.json();
        setValue(note);
    };

    const handleUpdate = async () => {
        const res = await fetch(
            `http://localhost:5000/notes/${match.params.id}`,
            {
                method: "PATCH",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(value),
            }
        );
        return res.json();
    };

    const handleDelete = async () => {
        const res = await fetch(
            `http://localhost:5000/notes/${match.params.id}`,
            {
                method: "DELETE",
            }
        );
        return res.json();
    };

    return (
        <MarkdownEditorContainer>
            <HeaderBar>
                <IconButton onClick={handleUpdate}>
                    <SyncIcon />
                </IconButton>
                <IconButton onClick={handleDelete}>
                    <DeleteOutlineIcon />
                </IconButton>
            </HeaderBar>

            {/* Note Title */}
            <Title>{value.title}</Title>

            <MDEditor
                className="markdown-editor"
                value={value.content}
                onChange={setValue}
            />
            {/* <MDEditor.Markdown source={value} /> */}
        </MarkdownEditorContainer>
    );
}

export default MarkdownEditor;
