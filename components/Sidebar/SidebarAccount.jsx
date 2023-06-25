import { List, Typography } from "@mui/material";
import { ListSubheader } from "@mui/material";
import { Divider } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import "@fontsource/poppins";


const SidebarAccount = () => {
  return (
    <>
      <List>
        <ListItem>
          <ListItemButton component="a" href='postcreate'>
            <Typography sx=
              {{ fontSize: "5px" }}>
              <AddIcon alt='Add' src='/' sx={{ color: "#fff", background: "#287EFF", borderRadius: "50%", marginRight: "25px", padding: "3px", boxShadow: "1px 3px 4px rgba(40, 126, 255, 0.64)" }} /></Typography>
            <Typography sx={{ color: "#B3B3B3", fontFamily: "poppins", fontWeight: 600, fontSize: "16px" }}>Post</Typography>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default SidebarAccount;