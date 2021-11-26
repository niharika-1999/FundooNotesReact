import * as React from "react";
import "../css/appBar.css";
import Logo from "../assets/FundooIcon.png";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useState, useEffect } from "react";
import { styled,alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Logout from '@mui/icons-material/Logout';
import Typography from "@mui/material/Typography";
import RefreshIcon from "@mui/icons-material/Refresh";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import GridViewIcon from "@mui/icons-material/GridView";
import Box from "@mui/material/Box";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchedNotes , viewList } from "../redux/Actions/notesAction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(10),
    width: "50%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "grey",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100px",
    [theme.breakpoints.up("md")]: {
      width: "500px",
    },
  },
}));

const drawerWidth = 200;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function Appbar( {handleDrawer, title} ) {
  const [search, setSearch] = useState("");
  const myNotes = useSelector((state) => state.allNotes.notes);
  const list = useSelector((state) => state.allNotes.viewList);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const logoutClick = () => {
    window.location = "/login";
  }


  useEffect(() => {
    console.log(myNotes);
    dispatch(
      setSearchedNotes(
        myNotes.filter((item) => {
          return item.title.toLowerCase().includes(search.toLowerCase());
        })
      )
    );
  }, [search, myNotes]);

  const handleView = () => {
    dispatch(viewList());
  };

  const refreshPage = ()=>{
    window.location.reload();
 }
  
 return (
  <AppBar position="fixed" style={{ background: "#ffffff", borderBottom:"1px solid #e5e8e9", borderTop:"1px solid #e5e8e9" }}>
    <Toolbar style={{ color: "rgba(0, 0, 0, 0.54)" }}>
      <IconButton
        aria-label="open drawer"
        edge="start"
        color="inherit"
        onClick={handleDrawer}
        sx={{
          marginRight: "15px",
        }}
      >
        <MenuIcon sx={{ color: "#5f6368" }} onClick={handleDrawer}/>
      </IconButton>
      <Avatar alt="FundooNotes" src={Logo} variant="square" />
      <Typography
        variant="h7"
        noWrap
        component="div"
        sx={{ display: { xs: "none", sm: "block" }, marginLeft: "5px" }}
      >
        <span className="mainLogoAppBar">{title}</span>
      </Typography>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search"
          onChange={(event) => handleSearch(event.target.value)}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton size="large" color="inherit">
          <Badge>
            <RefreshIcon sx={{ color: "#5f6368" }} onClick={refreshPage} />
          </Badge>
        </IconButton>
        <IconButton size="large" color="inherit">
          {!list ? (
            <SplitscreenOutlinedIcon
              fontSize="medium"
              onClick={handleView}
              style={{ marginLeft: "5px" }}
            />
          ) : (
            <GridViewIcon
              fontSize="medium"
              onClick={handleView}
              style={{ marginLeft: "5px" }}
            />
          )}
        </IconButton>
        <IconButton size="large" color="inherit">
          <Badge>
            <SettingsOutlinedIcon sx={{ color: "#5f6368" }} />
          </Badge>
        </IconButton>
        <IconButton
          onClick={handleClick}
          size="large"
          edge="end"
          aria-label="account of current user"
          aria-haspopup="true"
          color="inherit"
          sx={{
            marginLeft: "25px",
          }}
        >
          <AccountCircle sx={{ fontSize: 40, color: "#5f6368" }} />
        </IconButton>
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem onClick={logoutClick}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Sign Out of my Account
        </MenuItem>
      </Menu>
      </Box>
    </Toolbar>
  </AppBar>
);
}