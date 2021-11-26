import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import NotesIcons from "../components/NotesIcons";
import { useSelector } from "react-redux";
import "../css/notes.css";
import { updateNote } from '../Actions/notesAction';
import { update } from '../service/notesService';
import { useDispatch } from 'react-redux';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const Notes = ({ value }) => {
  const myNotes = useSelector((state) => state.allNotes.searchedNotes);
  const viewList = useSelector((state) => state.allNotes.viewList);
  const [mouseHover, setMouseHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [color, setColor] = React.useState("White");
  const [content, setContent] = React.useState("");
  const [noteId, setNoteId] = React.useState("");
  const dispatch = useDispatch();

  const data = {
    title: title,
    content: content,
    isTrash: false,
    color: color,
  };

  const handleClickOpen = (item) => {
    setTitle(item.title);
    setContent(item.content);
    setNoteId(item._id);
    setOpen(true);
    setColor(item.color);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdate = () => {
    update(data, noteId)
      .then((res) => {
        dispatch(updateNote(res));
      })
      .catch((err) => console.log(err.message));
    handleClose();
  };

  return myNotes.length > 0 ? (
    <div className="mainNew">
      <Box sx={{ mx: "3px", transform: "scale(0.85)" }}>
        <Grid container spacing={3} justifyContent={viewList ? "center" : null}>
          {myNotes.map((item, singleNote) => {
            if (item.isTrash === false) {
              return (
                <Grid
                  position="relative"
                  item
                  xs={12}
                  md={viewList ? 8 : 3}
                  key={item._id}
                >
                  <Card
                    variant="outlined"
                    justifyContent={viewList ? "center" : null}
                    style={{ background: item.color }}
                    className="notesCard"
                    key={singleNote}
                    onMouseOver={() => {
                      setMouseHover({ [singleNote]: true });
                    }}
                    onMouseLeave={() => {
                      setMouseHover({ [singleNote]: false });
                    }}
                  >
                    <CardContent>
                      <div
                        onClick={() => {
                          handleClickOpen(item);
                        }}
                      >
                        <Typography variant="h5">{item.title}</Typography>
                        <br />
                        <Typography sx={{ mb: 1.2 }} color="text.secondary">
                          {item.content}
                        </Typography>
                      </div>
                      {mouseHover[singleNote] ? (
                        <div className="noteIcons">
                          <div align="center">
                            <NotesIcons item={item} />
                          </div>
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
        <div>
          <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
            <DialogContent style={{ background: color }}>
              <input
                className="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                name="title"
                placeholder="Title"
              />
              <textarea
                className="text-area"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                name="content"
                placeholder="Take a note..."
              />
            </DialogContent>
            <DialogActions style={{ background: color }}>
              <Button
                variant="text"
                id="submitButton"
                type="submit"
                onClick={handleUpdate}
                style={{ textTransform: "none" }}
                color="inherit"
              >
                <b> Submit </b>
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Box>
    </div>
  ) : (
    <span>No matching results.</span>
  );
};

export default Notes;