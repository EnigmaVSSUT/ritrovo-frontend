import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Drawer } from "@mui/material";
import React from "react";
import SidebarAccount from "./SidebarAccount";
import SidebarMenu from "./SidebarMenu";
import Logo from "../../public/logo.png";
import Image from 'next/image';

const Sidebar = () => {

	return (
		<Drawer
			variant='persistent'
			open={true}
			anchor='left'
			PaperProps={{
                sx:{
                    backgroundColor:"background.default",
                    width:"250px"
                }}}
			>
			<Toolbar sx={{marginTop:"15px",marginLeft:"-10px"}}>
			<Image src={Logo} alt="IMAGE" height="38px" width="38px"/>
				<Typography sx={{marginLeft:"20px", fontSize:"23px", fontWeight:"700"}}>Ritrovo</Typography>
			</Toolbar>
			<SidebarMenu />
			<SidebarAccount />
		</Drawer>
	);
};

export default Sidebar;