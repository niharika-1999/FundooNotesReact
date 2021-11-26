import React, { useState } from "react";
import { createNewNotes } from "../service/notesService";
import { Button } from "@mui/material";
import "../css/notes.css";
import { addNote } from "../Actions/notesAction";
import { useDispatch } from "react-redux";

export default function AddNotes() {
  const [titleFieldVisible, setTitleFieldVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const showTitleField = () => {
    setTitleFieldVisible(true);
  };
  const hideTitleField = () => {
    setTitleFieldVisible(false);
  };

  const data = { title: title, content: content };

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewNotes(data)
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          dispatch(addNote(res.data.message));
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
    setTitle("");
    setContent("");
    hideTitleField();
  };

  return (
    <div>
      <div className="create-form" style={{ paddingTop: 100 }}>
        {titleFieldVisible && (
          <div className="backdrop" onClick={hideTitleField} />
        )}

        <form className="create-note">
          {titleFieldVisible && (
            <input
              className="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              onFocus={showTitleField}
              name="title"
              placeholder="Title"
            />
          )}

          <textarea
            className="text-area"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            onFocus={showTitleField}
            name="content"
            placeholder="Take a note..."
          />
           <div className="iconsAndAddNote">
            <div className="icons">
              <div className="signInNew" align="left">
                {titleFieldVisible}
              </div>
            </div>
            <div className="submitAndClose">
              <div className="submit" align="left">
                {titleFieldVisible && (
                  <Button
                    variant="text"
                    id="submitButton"
                    type="submit"
                    onClick={handleSubmit}
                    style={{ textTransform: "none", marginLeft: 250 }}
                    color="inherit"
                  >
                    <b>Submit</b>
                  </Button>
                )}
              </div>
              <div className="createNew" align="right">
                {titleFieldVisible && (
                  <Button
                    variant="text"
                    id="submitButton"
                    type="submit"
                    onClick={hideTitleField}
                    style={{ textTransform: "none" }}
                    color="inherit"
                  >
                    <b>Close</b>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}