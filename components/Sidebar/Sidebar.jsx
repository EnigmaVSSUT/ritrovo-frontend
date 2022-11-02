import { Adb } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Drawer } from "@mui/material";
import React from "react";
import SidebarAccount from "./SidebarAccount";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {

	return (
		<Drawer
			variant='persistent'
			open={true}
			anchor='left'
			PaperProps={{
                sx:{
                    backgroundColor:"background.default",
                    width:"220px"
                }}}
			>
			<Toolbar>
				<Adb />
				<Typography fontWeight={700}>Ritrovo</Typography>
			</Toolbar>
			<SidebarMenu />
			<SidebarAccount />
		</Drawer>
	);
};

export default Sidebar;
