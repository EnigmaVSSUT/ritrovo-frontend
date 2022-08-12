import { Adb } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Card } from "@mui/material";
import React from "react";
import SidebarAccount from "./SidebarAccount";
import SidebarMenu from "./SidebarMenu";

const Sidebar = () => {

	return (
		<Card elevation={5} sx={{ height: "100%" }}>
			<Toolbar>
				<Adb />
				<Typography fontWeight={700}>Ritrovo</Typography>
			</Toolbar>

			<SidebarMenu />
			<SidebarAccount />
		</Card>
	);
};

export default Sidebar;
