import { List } from "@mui/material";
import { ListSubheader } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import MenuOptions from "../../data/menu-options";
import React, { useState } from "react";
import { Card } from "@mui/material";

const SidebarMenu = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};
	return (
		<>
			<ListSubheader>Menu</ListSubheader>
			<Divider variant="middle" />
			<List>
				{MenuOptions.map((item, index) => (
					<ListItem key={index} disablePadding>
						<ListItemButton
							component="a"
							href={item.link}
							selected={selectedIndex === index}
							onClick={(event) => handleListItemClick(event, index)}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default SidebarMenu;
