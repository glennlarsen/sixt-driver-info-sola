import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import QuizIcon from "@mui/icons-material/Quiz";
import Logo from "components/Logo";
import { TabletAndDesktop } from "../ScreenViewSizes";
import { Mobile } from "../ScreenViewSizes";

const SideBarMenu = ({
  info,
  showSideBar,
  showBackButton,
  goBack,
  logout,
  auth,
  showHowItWorks,
  closeMenu,
}) => {
  return (
    <>
      <TabletAndDesktop>
        <Logo info={info} />
        <Divider style={{ display: showSideBar }} />
        <List style={{ display: showSideBar }}>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/forms">
              <ListItemIcon sx={{ color: "#FF5F00" }}>
                {<FormatAlignLeftIcon />}
              </ListItemIcon>
              <ListItemText primary="Forms" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{ display: showHowItWorks }}>
            <ListItemButton component={NavLink} to="/howitworks">
              <ListItemIcon sx={{ color: "#FF5F00" }}>
                {<QuizIcon />}
              </ListItemIcon>
              <ListItemText primary="How it works" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{ display: showBackButton }}>
            <ListItemButton onClick={goBack}>
              <ListItemIcon sx={{ color: "#FF5F00" }}>
                {<ArrowBackIcon />}
              </ListItemIcon>
              <ListItemText primary="Go back" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider style={{ display: showSideBar }} />
        <List style={{ display: showSideBar }}>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon sx={{ color: "black" }}>
                {<LogoutIcon />}
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                secondary={auth ? auth.user.username : null}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </TabletAndDesktop>

      <Mobile>
        <Logo logoLight={"logoLight"} info={info} />
        <Divider style={{ display: showSideBar }} />
        <List style={{ display: showSideBar }}>
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to="/forms" onClick={closeMenu}>
              <ListItemIcon sx={{ color: "#FF5F00" }}>
                {<FormatAlignLeftIcon />}
              </ListItemIcon>
              <ListItemText primary="Forms" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{ display: showHowItWorks }}>
            <ListItemButton component={NavLink} to="/howitworks">
              <ListItemIcon sx={{ color: "#FF5F00" }}>
                {<QuizIcon />}
              </ListItemIcon>
              <ListItemText primary="How it works" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{ display: showBackButton }}>
            <ListItemButton onClick={goBack}>
              <ListItemIcon sx={{ color: "#FF5F00" }}>
                {<ArrowBackIcon />}
              </ListItemIcon>
              <ListItemText primary="Go back" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider style={{ display: showSideBar }} />
        <List style={{ display: showSideBar }}>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon sx={{ color: "white" }}>
                {<LogoutIcon />}
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                secondary={auth ? auth.user.username : null}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Mobile>
    </>
  );
};

export default SideBarMenu;
