import React from "react";
import { TextField,Button,Typography,Grid,Toolbar,CssBaseline} from "@mui/material";
import { makeStyles } from '@material-ui/core/styles' ;
import Image from 'next/image';
import MainPic from '/public/img.svg';
import logo from '/public/logo.png';
import "@fontsource/poppins";
const useStyles = makeStyles(() => ({
	first: {
	  background:'#ffffff',
	  fontFamily:'Poppins',	
	},
   logo: {
	flexGrow: "1",
    cursor: "pointer",
	color:'#000000',
	fontSize:'28px',
	fontWeight:'900',
	paddingBottom: "10px",
	marginLeft:'20px',
	marginTop: '10px',
	},
	title: {
		textDecoration: "none",
		color: "#000000",
		fontWeight:'700',
		fontSize: '54px',
		marginTop: 20,
		marginleft: 32,
		marginBottom: "55px",
		fontFamily:"poppins"
	  },
	  content: {
		color: "#000000",
		fontWeight:'600',
		  fontSize: '20px',
		  marginTop: 33,
		
		fontFamily:"poppins"
	  },
	second: {
		marginleft: 32,
		marginRight:32,
		borderRadius:'10px',
		background:'FAFBFF',
		fontFamily:"poppins"
	  },
	  
	regibutton: {
		textDecoration: "none",
		padding:"10px",
		height: "50px",
		width:"200px",
	    color: "#ffffff",
		background:'#287EFF',
		borderRadius:'20px',
		fontWeight:'500',
		fontSize:'30px',
		marginTop: 21.6,
		marginRight: 32,
		marginLeft: 2,
		marginBottom:16,
		boxShadow: '1px 8px 7px 0px #287EFF80',
		"&:hover": {
		  color: "#bfbfbf",
		  fontFamily:"poppins"
	  },
	},
	new: {
		color: "#000000",
		fontWeight:'500',
		fontSize: '18px',
		marginTop: 40,
		marginleft:32,
		fontFamily:"poppins"
	},
	contained: {
		padding:"1opx"
	},
	img: {
		position: "relative",
		bottom:"40px"
	}
  }));
const ProfileForm = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.first}>
			
			<CssBaseline />
			<Toolbar sx={{
				marginTop:"5px",marginLeft:"6px",position:"sticky"}}>
			<Image src={logo} alt="IMAGE" height="40px" width="40px"/>
			<Typography variant="h4" className={classes.logo}>
			 Ritrovo
			</Typography>
			</Toolbar>
			
		   <Grid container height="100%">
				<Grid item xs={12} md={5.7} mx="18px">
			<Typography variant="h3" gutterBottom className={classes.title}>Profile Details</Typography>
			
				<Typography variant="h6" gutterBottom className={classes.content}>Name</Typography>
					<TextField size="small" className={classes.second} sx={{
						                                              width: {
							                                          xs: 300,
							                                           sm: 480,
						}
					}} />
					<Typography variant="h6" gutterBottom className={classes.content}>Registration Number</Typography>
					<TextField size="small" className={classes.second} sx={{
						                                              width: {
							                                          xs: 300,
							                                           sm: 480,
						}
					}} />
					<Typography variant="h6" gutterBottom className={classes.content}>Graduation Year</Typography>
					<TextField size="small" className={classes.second} sx={{
						                                              width: {
							                                          xs: 300,
							                                           sm: 480,
						}
					}} />
					<Typography variant="h6" gutterBottom className={classes.content}>Branch</Typography>
					<TextField size="small" className={classes.second} sx={{
						                                              width: {
							                                          xs: 300,
							                                           sm: 480,
						}
					}} />
					
					<Button variant="contained" className={classes.regibutton}>Register </Button>
					
				
			</Grid>
				<Grid item md={6} className={classes.img} display={{
					xs: 'none',
					sm: 'none',
					md: 'none',
					lg:'block'	
				}}>
			<Image src={MainPic} alt="IMAGE" height="640px"/>
			</Grid>
		</Grid>
		</Grid>
	);
}

export default ProfileForm;
