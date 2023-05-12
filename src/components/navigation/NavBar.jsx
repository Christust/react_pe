import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import { setToken } from "../../store/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { MaterialUIContext } from "../../providers/MaterialUIContext";
import navbarIcons from "../../constants/navigation";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

export default function MiniDrawer({ output }) {
  const components = React.useContext(MaterialUIContext);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.user.token);

  function logout() {
    window.api.logout({ token }).then((res) => {
      dispatch(setToken());
      navigate("/login");
    });
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <components.Box sx={{ display: "flex" }}>
      <components.CssBaseline />
      <AppBar position="fixed" open={open}>
        <components.Toolbar>
          <components.IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <components.MenuIcon />
          </components.IconButton>
          <components.Typography variant="h6" noWrap component="div">
            Moderatorem
          </components.Typography>
        </components.Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <components.IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <components.ChevronRightIcon />
            ) : (
              <components.ChevronLeftIcon />
            )}
          </components.IconButton>
        </DrawerHeader>
        <components.Divider />
        <components.List>
          {navbarIcons.map((navbarOption) => {
            return (
              <components.ListItem
                onClick={() => navigate(navbarOption.route)}
                key={navbarOption.text}
                disablePadding
                sx={{ display: "block" }}
              >
                <components.ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <components.ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {navbarOption.icon}
                  </components.ListItemIcon>
                  <components.ListItemText
                    primary={navbarOption.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </components.ListItemButton>
              </components.ListItem>
            );
          })}
        </components.List>
        <components.Divider />
        <components.List>
          <components.ListItem
            onClick={logout}
            key={"Logout"}
            disablePadding
            sx={{ display: "block" }}
          >
            <components.ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <components.ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <components.LogoutIcon />
              </components.ListItemIcon>
              <components.ListItemText
                primary={"Logout"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </components.ListItemButton>
          </components.ListItem>
        </components.List>
      </Drawer>
      <components.Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {output}
      </components.Box>
    </components.Box>
  );
}
