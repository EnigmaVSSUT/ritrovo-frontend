import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import MenuOptions from "../../lib/data/menu-options";
import React, { useState } from "react";
import "@fontsource/poppins";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <List sx={{ marginTop: "20px", color: "#979595", marginBottom: "20px" }}>
        {MenuOptions.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ paddingBottom: "15px" }} >
            <Link to={item.link} style={{ textDecoration: "none",width:"100%" }}>
              <ListItemButton
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
                sx={{
                  borderRadius: "13px",
                  marginLeft: "10px",
                  marginRight: "10px",
                  "&:hover, &:focus": {
                    background: "#287EFF",
                    borderRadius: "13px",
                    marginRight: "10px",
                    color: "#fff",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontSize: 15,
                    fontWeight: 900,
                    fontFamily: "poppins",
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default SidebarMenu;
