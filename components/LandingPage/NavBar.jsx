import React from "react";
import { Toolbar, CssBaseline, Typography, Grid, Box } from "@mui/material";
import Image from 'next/image';
import NavLogo from '/public/nav_logo.png';
import "@fontsource/poppins";
import { MuiDrawer } from "./MuiDrawer";
import Link from 'next/link'

function NavBar() {
	return (
		<Grid position="static" sx={{
				backgroundColor: 'background.default',
				fontFamily: "Poppins",
			
		}}>
			<CssBaseline />
			<Toolbar sx={{
				marginTop: "18px", marginLeft: "10px"
			}}>
				<Image src={NavLogo} alt="logo" height="40px" width="40px" />
				<Typography variant="h4" sx={{
						flexGrow: "1",
						cursor: "pointer",
						color: 'text.primary',
						fontSize: '28px',
						fontWeight: '900',
						paddingBottom: "10px",
						marginLeft: '20px',
						marginTop: "10px"
				}}>Ritrovo</Typography>
				<Grid sx={{

					display: "flex"
				}}>
					<Box display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }}>
					
					<Link href="/">
					<Typography variant="nav" sx={{
						"&:hover": {
							color: "blue.primary",
							borderBottom: "1px solid",
							borderColor:"blue.primary",
						}
					}}><a>Home</a></Typography></Link>
						<Link href="/about">
						<Typography variant="nav" sx={{
							"&:hover": {
								color: "blue.primary",
								borderBottom: "1px solid",
								borderColor:"blue.primary",
							}
						}}><a>About Us</a></Typography></Link>
						<Link href="/contact">
						<Typography variant="nav" sx={{
							"&:hover": {
								color: "blue.primary",
								borderBottom: "1px solid",
								borderColor:"blue.primary",
							}
						}}><a>Contact Us</a></Typography></Link>
						<Link href="/faq">
						<Typography variant="nav1" sx={{
							color: "background.default",
							backgroundColor: 'blue.primary',
							boxShadow: '4px 5px 5px 2px #b8b8b8 ',
							"&:hover": {
								color: "gray.secondary",
							},
						}}><a>Sign In</a></Typography></Link>
					
					</Box>
				</Grid>
				<MuiDrawer />
			</Toolbar>
		</Grid>

	);
}
export default NavBar;