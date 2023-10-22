import React from "react";
import { TextField, Button, Typography, Grid, Toolbar, CssBaseline, Box } from "@mui/material";
import { BsArrowRightShort } from 'react-icons/bs';
import "@fontsource/poppins";
import { Link } from "react-router-dom";

const Signin = () => {

	return (

		<Grid sx={{
			backgroundColor: 'background.default',
			fontFamily: 'Poppins',

		}}>
			<getTheme />
			<CssBaseline />
			<Toolbar sx={{
				marginTop: "25px", marginLeft: "16px",
				position: "sticky"
			}}>
				<Box component="img" src='logo.png' alt="IMAGE" height="40px" width="40px" />
				<Typography variant="title3" >
					Ritrovo
				</Typography>
			</Toolbar>

			<Grid container height="100%">
				<Grid item xs={12} md={5.7} mx="10px">
					<Typography variant="title4" gutterBottom >Sign In</Typography><br />

					<Typography variant="stitle1">Username/Email</Typography><br />
					<TextField size="small" sx={{
						width: {
							position: "relative",
							xs: 350,
							sm: 480
						},
						left: 32,
						top: 75,
						right: 32,
						borderRadius: '10px',
						backgroundColor: 'gray.textf',
						fontFamily: "poppins"
					}} /><br />

					<Typography variant="stitle3" gutterBottom >Password</Typography>
					<br /><TextField size="small" type="password" sx={{
						width: {
							xs: 350,
							sm: 480,
						},
						left: 32,
						right: 32,
						top: 100,
						borderRadius: '10px',
						backgroundColor: 'gray.textf',
						fontFamily: "poppins"
					}
					} /><br />
					<Typography variant="stitle2" gutterBottom>Forgot Password ?</Typography>
					<br /><Button href="/home" variant="contained" sx={{
						textDecoration: "none",
						color: "background.default",
						backgroundColor: 'blue.primary',
						borderRadius: '18px',
						fontWeight: '500',
						fontSize: '30px',
						padding: "5.6px",
						marginTop: "200px",
						marginRight: "32px",
						marginLeft: "32px",
						marginBottom: "16px",
						boxShadow: '1px 8px 7px 0px #287EFF80',
						"&:hover": {
							color: "gray.secondary",
							fontFamily: "poppins"
						}
					}}><BsArrowRightShort fontSize="40px" /> </Button><br />
					<Typography variant="stitle" gutterBottom >New User ? <Link to='/signup'><a> Sign Up</a></Link></Typography>
				</Grid>
				<Grid item md={6} sx={{
					position: "relative",
					bottom: "40px"
				}} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'block' }} >
					<Box component='img' src='img.svg' alt="IMAGE" height="640px" width="700px" />
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Signin;
