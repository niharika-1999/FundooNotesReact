import React from 'react';
import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import AppBar from "../components/AppBar";
import MiniDrawer from "../components/Drawer";
import Notes from "../components/Notes";
import { notes } from "../service/notesService";
import { useDispatch } from "react-redux";
import { setNotes } from "../redux/Actions/notesAction";
import AddNotes from '../components/AddNotes';
import DeleteNote from '../components/DeleteNote';

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [title,setTitle] = useState('FundooNotes');
  const [path,setPath] = useState("");
  const dispatch = useDispatch();

  const handleClick = (title) => {
    setTitle(title);
  }

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

  const handleDrawer = () => {
    setOpen((previousState) => {
      return !previousState;
    });
};

  return (
    <div>
      <AppBar handleDrawer={handleDrawer} title={title}/>
<<<<<<< HEAD
      <MiniDrawer open={open}  handleClick={handleClick} path={path} setPath={setPath}/>
      {(path==="trash") ? <DeleteNote /> :
      <div> 
       <AddNotes />
      <Box component="main" sx={{ flexGrow: 1}}>
          <Notes value={false}/>
=======
      <MiniDrawer open={open}  handleTitle={handleTitle} />
      <AddNotes />
      <Box sx={{ flexGrow: 1 , p:10}}>
        <Notes />
>>>>>>> c64ac2464d3f98423dc778ca2aae4a535054177f
      </Box>
    </div>
  }
  </div>
);
}

