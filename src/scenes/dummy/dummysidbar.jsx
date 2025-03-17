import { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import logoLight from "./logo.png";
import logoDark from "./logo2.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === to}
      style={{
        color: selected === to ? "white" : colors.blueAccent[500],
        fontWeight: selected === to ? "bold" : "regular",
        backgroundColor: selected === to ? colors.blueAccent[700] : "inherit",
      }}
      onClick={() => {
        setSelected(to);
        localStorage.setItem("selectedSidebarItem", to);
      }}
      icon={<Box sx={{ display: "flex", alignItems: "center", background: "none" }}>{icon}</Box>}
    >
      <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ isSidebar }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isMobile = useMediaQuery("(max-width: 900px)");
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  // const [isCollapsed, setIsCollapsed] = useState(false);


  useEffect(() => {
    const storedItem = localStorage.getItem("selectedSidebarItem");
    if (storedItem) {
      setSelected(storedItem);
    }
  }, [location.pathname]);

  const logoSrc = theme.palette.mode === "dark" ? logoDark : logoLight;

  return (
      <Box
      sx={{
        position: isMobile ? "absolute" : "fixed",
        left: 0,
        top: 0,
        width: "270px", // Removed isCollapsed check
        height: "100vh",
        background: colors.primary[400],
        display: "flex",
        flexDirection: "column",
        zIndex: isMobile ? 1300 : 1,

        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#fff !important",
        },
      }}
    >
      <Box alignItems="center" sx={{ width: "100%", padding: "20px" }}>
        <img src={logoSrc} alt="logo" style={{ width: "100%", cursor: "pointer" }} />
      </Box>

      <ProSidebar>
        <Menu iconShape="square" style={{ padding: "20px", borderRadius: "20px" }}>
          <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Experience" to="/allExperiences" icon={<WorkOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
          <Item title="Logout" to="/logout" icon={<LogoutOutlinedIcon />} selected={selected} setSelected={setSelected} />
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;