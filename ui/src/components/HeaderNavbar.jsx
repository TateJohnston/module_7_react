import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useUserContext } from "../stores/userStore";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const currencies = [
  { name: "USD", symbol: "$" },
  { name: "AUD", symbol: "$" },
  { name: "NZD", symbol: "$" },
  { name: "GBP", symbol: "£" },
  { name: "EUR", symbol: "€" },
  { name: "SGD", symbol: "$" },
];

const randomCurrency =
  currencies[Math.floor(Math.random() * currencies.length)].name;

const pages = [
  {
    page: "Lab-One",
    url: `http://localhost:5173/lab-one/?currency=${randomCurrency}`,
  },
  {
    page: "Lab-Two",
    url: `http://localhost:5173/lab-two/?currency=${randomCurrency}`,
  },
  {
    page: "Lab-Three",
    url: "http://localhost:5173/lab-three/",
  },
  { page: "Lab-Five", url: "http://localhost:5173/lab-five/" },
];

function HeaderNavbar() {
  const { currentUser } = useUserContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Module 7 Part 2
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{ textAlign: "center", color: "Black" }}
                    component={NavLink}
                    to={page.url}
                  >
                    {page.page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink key={page.page} to={page.url}>
                {page.page}
              </NavLink>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={currentUser}>
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}> */}
              <Avatar alt={currentUser} src="/static/images/avatar/2.jpg" />
              {/* </IconButton> */}
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderNavbar;
