import React, { useState } from "react";
import "./sideBar.scss";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import ToggleBtns from "../ToggleBtns/ToggleBtns";
import SettingsIcon from "@material-ui/icons/Settings";


const SideBar = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div className="sideBar">
      <Button onClick={toggleDrawer("right", true)}>
        <SettingsIcon />
      </Button>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        <ToggleBtns />
      </Drawer>
    </div>
  );
};

export default SideBar;
