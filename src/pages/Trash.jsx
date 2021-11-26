import React, { useEffect } from "react";
import Appbar from "../components/AppBar";
import MiniDrawer from "../components/Drawer";
import { notes } from "../service/notesService";
import { useDispatch } from "react-redux";
import { setNotes } from "../Actions/notesAction";
import DeleteNote from "../components/DeleteNote";

export default function Trash() {
    const dispatch = useDispatch();
    useEffect(() => {
      fetchitem();
    }, []);
    const fetchitem = () => {
      notes()
        .then((res) => {
          dispatch(setNotes(res.data));
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  
    const [open, setOpen] = React.useState(false);
    const [title, setTitle] = React.useState("FundooNotes");
    const handleDrawer = () => {
      open ? setOpen(false) : setOpen(true);
    };
    const handleClick = (title) => {
      setTitle(title);
    };
    return (
      <div>
        <Appbar handleDrawer={handleDrawer} title={title} />
        <MiniDrawer open={open} handleClick={handleClick} />
        <DeleteNote />
      </div>
    );
  }