import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { List, ListItem, Box } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

const drawerWidth = 220;
const openedMixin = (theme) => ({
  width: drawerWidth,
  top: "auto",
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  top: "auto",
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ListItemsColour = styled(ListItem)`
    &:hover {
      background-color: #e6e8e6;
    }
    &:click {
      background-color: #e6e8e6;
    }
    &:focus {
      background-color: #f5cb90;
    }
    border-radius: 0 25px 25px 0;
    `;
export default function MiniDrawer(props) {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true)
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const menuItems = [
    {
      text: 'Notes',
      icon: <LightbulbOutlinedIcon />,
      path: 'notes'
    },
    {
      text: 'Remainders',
      icon: < NotificationsNoneOutlinedIcon />,
      path: '/create'
    },
    {
      text: 'Edit labels',
      icon: <CreateOutlinedIcon />,
      path: '/create'
    },
    {
      text: 'Archieve',
      icon: < ArchiveOutlinedIcon />,
      path: '/login'
    },
    {
      text: 'Trash',
      icon: <DeleteOutlinedIcon />,
      path: "trash"
    },
  ];

  return (
    <Box sx={
      { display: 'flex' }
    } >

      <Drawer variant="permanent" open={open} onMouseOver={() => handleDrawerOpen()}
        onMouseLeave={() => handleDrawerClose()}>

        <DrawerHeader />
        <List >
          {menuItems.map((item) => (
            <ListItemsColour
              button

              key={item.text}

              onClick={() => {
                props.handleClick(item.text);
                props.setPath(item.path)
              }
              }
              >
                <ListItemIcon onClick={() => { props.handleClick(item.text); }} >{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemsColour>
          ))}
        </List>
        </Drawer>
    </Box>
  )
}

              
