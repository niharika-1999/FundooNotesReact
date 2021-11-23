import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography , Button} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../css/notes.css";
import NotesIcons from "../components/NotesIcons";
import { updateNote } from '../redux/Actions/notesAction'; 
import { update } from '../service/notesService';
import { useDispatch } from 'react-redux';
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

const Notes = () => {
  const myNotes = useSelector((state) => state.allNotes.searchedNotes);
  const [mouseHover, setMouseHover] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [noteId, setNoteId] = React.useState("");
  const dispatch = useDispatch();

  const data = {
    title: title,
    content: content
  };

  const handleClickOpen = (item) => {
    setTitle(item.title);
    setContent(item.content);
    setNoteId(item._id);
    setOpen(true);
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
    <Box sx={{ mx: '2px', transform: 'scale(0.8)' }}>
      <Grid container spacing={4}>
        {myNotes.map((item, singleNote) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={item._id}>
              <Card variant="outlined" sx={{ width: 250, height: 170 }} key= {singleNote} onMouseOver={() => {setMouseHover({[singleNote]:true});}}onClick={() => {
                  handleClickOpen(item);
                }} onMouseLeave={() => {setMouseHover({[singleNote]:false}) ; }}>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <br />
                  <Typography sx={{ mb: 1.2 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                {mouseHover[singleNote] ? <NotesIcons /> : null}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <div>
        <Dialog
          fullWidth maxWidth="sm"
          open={open}
          onClose={handleClose}
        >
          <DialogContent>
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
          <DialogActions>
            <Button variant="text"
                  id="submitButton"
                  type="submit"
                  onClick={handleClose}
                  style={{ textTransform: "none" }}
                  color="inherit">
                  <b>Close</b>
            </Button>
            <Button  variant="text"
                  id="submitButton"
                  type="submit"
                  onClick={handleUpdate}
                  style={{ textTransform: "none" }}
                  color="inherit">
                  <b> Submit </b>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  ) : (
    <span>No matching results.</span>
  );
};
export default Notes;