import { List } from "@mui/material";
import { ListSubheader } from "@mui/material";
import { Divider } from "@mui/material";
import { Avatar } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemAvatar } from "@mui/material";
import { ListItemText } from "@mui/material";
import React from "react";

const SidebarAccount = () => {
	return (
		<>
			<ListSubheader>Account</ListSubheader>
			<Divider variant="middle" />
			<List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href='#'>
                        <ListItemAvatar>
                            <Avatar alt='John Doe' src='/' />
                        </ListItemAvatar>
                        <ListItemText primary="John Doe" secondary="@johndoe_"/>
                    </ListItemButton>
                </ListItem>
			</List>
		</>
	);
};

export default SidebarAccount;
