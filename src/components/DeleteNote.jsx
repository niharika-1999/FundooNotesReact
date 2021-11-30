import { Grid, Card, Typography, Button, Box, IconButton ,CardMedia } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import { useSelector } from "react-redux";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch } from "react-redux";
import { updateNote,deleteNote } from "../actions/notesAction";
import { update, Delete } from "../service/notesService";
import "../css/delete.css";
import Snackbar from '@mui/material/Snackbar';

export default function DeleteNotes() {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false)
  const [hover, setHover] = React.useState([]);
  const [itemRemoved, setItemRemoved] = React.useState("");
  const viewList = useSelector((state) => state.allNotes.viewList);

  const handleRestore = (item) => {
    const data = {
      title: item.title,
      content: item.content,
      isTrash: false,
      color: item.color
    };

    update(data, item._id)
      .then((res) => {
        dispatch(updateNote(res));
      })
      .catch((err) => console.log(err.message));
  };

  const handleDelete = (item) => {
    Delete(item._id)
      .then((res) => {
        setOpen(true)
        dispatch(deleteNote(item._id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const undoRestore = (itemRemoved) => {
    const dataRestore = {
      title: itemRemoved.title,
      content: itemRemoved.content,
      isTrash: true,
      color: itemRemoved.color
    };
    update(dataRestore, itemRemoved._id).then((res) => {
      dispatch(updateNote(res))
      setOpen(true)
    }).catch((err) => console.log(err.message));
  }
  const handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };

  const myNotes = useSelector((state) => state.allNotes.searchedNotes);
  console.log(myNotes);
  const emptyTrash = () => {
    myNotes.map((item) => {
      if (item.isTrash === true) {
        handleDelete(item);
      }
    });
  };
  return (
    <div className="mainPage">
      <div className="trash-text-out">
        <div className="trash-text">
          <span>Notes in trash are deleted after 7 days.</span>
          <br />
          <Button
            variant="text"
            style={{ textTransform: "none" }}
            onClick={() => {
              emptyTrash();
            }}
          >
            <b> Empty Trash </b>
          </Button>
        </div>
      </div>
      <Box sx={{ mx: "5px", transform: "scale(0.85)" }}>
        <Grid container spacing={3} justifyContent={viewList ? "center" : null}>
          {myNotes.map((item, index) => {
            if (item.isTrash === true) {
              return (
                <Grid
                  item
                  xs={12}
                  md={viewList ? 8 : 3}
                  key={item._id}
                >
                  <Card
                    variant="outlined"
                    style={{ background: item.color }}
                    justifyContent={viewList ? "center" : null}
                    className="notesCardDelete"
                    onMouseEnter={() => {
                      setHover({ [index]: true });
                    }}
                    onMouseLeave={() => {
                      setHover({ [index]: false });
                    }}
                  >

                    <CardContent>
                    {item.profileImg !== undefined ? (
                                        <CardMedia
                                          component="img"
                                          image={`http://localhost:5000/images/${item.profileImg}`}
                                          alt="dish"
                                          style={{ height: "150px" }}
                                        />
                                      ) : null}
                      <Typography variant="h5">{item.title}</Typography>
                      <br />
                      <Typography sx={{ mb: 1.2 }} color="text.secondary">
                        {item.content}
                      </Typography>

                      <div align="left">
                        {hover[index] ? (
                          <div className="delete-icons">
                            <IconButton
                              title="Delete forever"
                              fontSize="large"
                              onClick={() => {
                                handleDelete(item);
                              }}
                            >
                              <DeleteForeverIcon fontSize="large" />
                            </IconButton>
                            <IconButton
                              title="Restore"
                              fontSize="large"
                              onClick={() => {
                                handleRestore(item);
                              }}
                            >
                              <RestoreFromTrashIcon fontSize="large" />
                            </IconButton>
                            <Snackbar
                              anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                              }}
                              open={open}
                              autoHideDuration={5000}
                              message="Note restored"
                              onClose={handleToClose}
                              action={
                                <div>
                                  <Button variant="text" onClick={() => { undoRestore(itemRemoved) }}>UNDO</Button>
                                  <CloseIcon fontSize="small" onClick={handleToClose} /></div>
                              }
                            />
                          </div>
                        ) : null}
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
        </Box>
      <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        open={open}
        autoHideDuration={5000}
        message="Note deleted permanently"
        onClose={handleToClose}
      />
    </div>
  );
}