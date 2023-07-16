import React from "react";
import { Toolbar, CssBaseline, Typography, Grid, Box,Button } from "@mui/material";
import "@fontsource/poppins";
import { MuiDrawer } from "./MuiDrawer";
import { Link } from "react-router-dom";

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
				<Box component="img" src="nav_logo.png" alt="logo" height="40px" width="40px" />
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
					
					<Link to="/">
					<Typography variant="nav" sx={{
						"&:hover": {
							color: "blue.primary",
							borderBottom: "1px solid",
							borderColor:"blue.primary",
						}
					}}><a>Home</a></Typography></Link>
						<Link to="/about">
						<Typography variant="nav" sx={{
							"&:hover": {
								color: "blue.primary",
								borderBottom: "1px solid",
								borderColor:"blue.primary",
							}
						}}><a>About Us</a></Typography></Link>
						<Link to="/contact">
						<Typography variant="nav" sx={{
							"&:hover": {
								color: "blue.primary",
								borderBottom: "1px solid",
								borderColor:"blue.primary",
							}
						}}><a>Contact Us</a></Typography></Link>
						<Link to="/signin">
						<Button variant="contained" sx={{textTransform:"capitalize",marginLeft:"56px",marginRight:"32px",
					backgroundColor:"#287EFF",borderRadius:"12px",padding:"10px",width:"130px"}}>
					Sign In</Button></Link>
					
					</Box>
				</Grid>
				<MuiDrawer />
			</Toolbar>
		</Grid>

	);
}
export default NavBar;