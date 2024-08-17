import {
  CssBaseline,
  Box,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  MenuIcon,
  ChevronLeftIcon,
  logo,
  Avatar,
  MoreIcon,
  MainListItems,
  Brightness7Icon,
  NightlightIcon,
} from "./index";

import { useState } from "react";
import { useThemeContext } from "../../context/themeprovider/themeprovider";
import { AppBar, Drawer } from "./sidebar.style";

export default function SideBar() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { toggleColorMode, theme } = useThemeContext();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        open={open}
        style={{ backgroundColor: "black" }}
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <img src={logo} alt="" />
            </Avatar>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 24 }}>
            XPOWER
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              sx={{ ml: 1 }}
              color="inherit"
              onClick={toggleColorMode}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <NightlightIcon />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-haspopup="true"
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} style={{ height: "100vh" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <MainListItems />
        </List>
      </Drawer>
    </Box>
  );
}
