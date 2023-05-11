import React from "react";
import {
  CircularProgress,
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Button,
  TextField,
  Card,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";

export const MaterialUIContext = React.createContext();

export const MaterialUIProvider = ({ children }) => {
  const components = {
    CircularProgress,
    Box,
    MuiDrawer,
    MuiAppBar,
    Toolbar,
    List,
    CssBaseline,
    Typography,
    Divider,
    IconButton,
    MenuIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    LogoutIcon,
    Button,
    TextField,
    Card,
  };

  return (
    <MaterialUIContext.Provider value={components}>
      {children}
    </MaterialUIContext.Provider>
  );
};
