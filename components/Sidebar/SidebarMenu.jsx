import { List, Typography } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import MenuOptions from "../../lib/data/menu-options";
import React, { useState } from "react";
import styled from "@emotion/styled";
import "@fontsource/poppins";

const SidebarMenu = () => {
	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};
	return (
		<>
			<List sx={{marginTop:"20px", color:"#979595", marginBottom:"20px"}}>
				{MenuOptions.map((item, index) => (
					<ListItem key={index} disablePadding sx={{paddingBottom:"15px"}}>
						<ListItemButton
							component="a"
							href={item.link}
							// selected={selectedIndex == index}
							onClick={(event) => handleListItemClick(event, index) }
							sx={{
								borderRadius: "13px",
								marginLeft:"10px",
								marginRight:"10px",
								'&:hover, &:focus': {
									
								background: "#287EFF",
								borderRadius: "13px",
								marginRight:"10px",
								color:"#fff"
								}
							}}
						>
							<ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
							<ListItemText primary={item.title} 
							    primaryTypographyProps={{
									fontSize: 15,
									fontWeight:900,
									fontFamily:"poppins"
								  }}/>
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default SidebarMenu;