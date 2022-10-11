import React from "react";
import { Toolbar, CssBaseline, Typography, Grid, Box } from "@mui/material";
import { makeStyles} from "@mui/styles";
import Image from 'next/image';
import NavLogo from '/public/nav_logo.png';
import "@fontsource/poppins";
import { MuiDrawer } from "./MuiDrawer";

const useStyles = makeStyles((theme) => ({
	nav_links: {
		marginLeft: theme.spacing(10),
		display: "flex"
	},
	mainn: {
		background: '#ffffff',
		fontFamily: "Poppins",
	},
	logo: {
		flexGrow: "1",
		cursor: "pointer",
		color: '#000000',
		fontSize: '28px',
		fontWeight: '900',
		paddingBottom: "10px",
		marginLeft: '20px',
		marginTop: "10px"
	},
	link: {
		textDecoration: "none",
		color: "#000000",
		fontWeight: '600',
		fontSize: '20px',
		marginTop: theme.spacing(2.5),
		marginRight: theme.spacing(4),
		marginLeft: theme.spacing(7),
		marginBottom: theme.spacing(2),
		"&:hover": {
			color: "#287EFF",
			borderBottom: "1px solid #287EFF",
		},
	},
	link1: {
		textDecoration: "none",
		color: "#ffffff",
		background: '#287EFF',
		borderRadius: '15px',
		fontWeight: '500',
		fontSize: '20px',
		padding: theme.spacing(1, 4),
		marginTop: theme.spacing(1.5),
		marginRight: theme.spacing(4),
		marginLeft: theme.spacing(7),
		marginBottom: theme.spacing(2),
		boxShadow: '4px 5px 5px 2px #b8b8b8 ',
		"&:hover": {
			color: "#bfbfbf",
		},
	},
}));

function NavBar() {
	const classes = useStyles();
	return (
		<Grid position="static" className={classes.mainn}>
			<CssBaseline />
			<Toolbar sx={{
				marginTop: "18px", marginLeft: "10px"
			}}>
				<Image src={NavLogo} alt="logo" height="40px" width="40px" />
				<Typography variant="h4" className={classes.logo}>Ritrovo</Typography>
				<Grid className={classes.nav_links} >
					<Box display={{ xs: 'none', sm: 'none', md: 'none',lg:'block' }}>
						<a href="/" className={classes.link}>Home</a>
						<a href="/about" className={classes.link}>About Us</a>
						<a href="/contact" className={classes.link}>Contact Us</a>
						<a href="/faq" className={classes.link1}>Sign In</a>
					</Box>
				</Grid>
				<MuiDrawer />
			</Toolbar>
		</Grid>

	);
}
export default NavBar;