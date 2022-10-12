import React from "react";
import { TextField,Button,Typography,Grid,Toolbar,CssBaseline} from "@mui/material";
import { makeStyles} from '@mui/styles' ;
import { BsArrowRightShort } from 'react-icons/bs';
import Image from 'next/image';
import MainPic from '../public/img.svg';
import logo from '../public/logo.png';
import "@fontsource/poppins";

const useStyles = makeStyles(() => ({
	mainn:{
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
	marginTop:'10px',
	},
	title: {
		textDecoration: "none",
		color: "#000000",
		fontWeight:'700',
		fontSize:'54px',
		marginTop:32,
		marginLeft: 32,
		marginBottom: 40,
		fontFamily:"poppins",
		marginBottom :"65px",
	  },
	  sub: {
		color: "#000000",
		fontWeight:'600',
		fontSize:'20px',
		marginTop:32,
		marginLeft: 32,
		fontFamily:"poppins"
	  },
	  tf: {
		marginLeft:32,
		marginRight:32,
		borderRadius:'10px',
		background:'#FAFBFF',
		fontFamily:"poppins"
	  },
	  sub2: {
		color: "#000000",
		fontWeight:'500',
		fontSize:'18px',
		marginTop:24,
		marginLeft: 32,
		marginBottom:36,
		fontFamily:"poppins"
	  },
	link1: {
		textDecoration: "none",
		color: "#ffffff",
		background:'#287EFF',
		borderRadius:'18px',
		fontWeight:'500',
		fontSize:'30px',
		padding:5.6,
		marginTop:21.6,
		marginRight:32,	
		marginLeft: 32,
		marginBottom: 16,
		boxShadow: '1px 8px 7px 0px #287EFF80',
		"&:hover": {
		  color: "#bfbfbf",
		  fontFamily:"poppins"
	  },
	},
	new: {
		color: "#000000",
		fontWeight:'500',
		fontSize:'18px',
		marginTop:40,
		marginLeft: 32,
		fontFamily:"poppins"
	  },
	  img:{
		position:"relative",
		bottom:"40px"
	  }
  }));
  
const Signin = () => {
	
	const classes = useStyles();
    
	return (
		
		<Grid className={classes.mainn}>
			<getTheme/>
			<CssBaseline />
			<Toolbar sx={{
				marginTop:"25px",marginLeft:"16px",
				position:"sticky"}}>
			<Image src={logo} alt="IMAGE" height="40px" width="40px"/>
			<Typography variant="h4" className={classes.logo}>
			 Ritrovo
			</Typography>
			</Toolbar>
			
		   <Grid container height="100%">
		   <Grid item xs={12} md={5.7} mx="10px">
			<Typography variant="h3" gutterBottom className={classes.title}>Sign In</Typography>
			
				<Typography variant="h5" gutterBottom className={classes.sub}>Username/Email</Typography>
				<TextField size="small"  className={classes.tf} sx={{
					width:{
						xs:350,
						sm:480,
					}}
					}/>
				<Typography variant="h5" gutterBottom className={classes.sub}>Password</Typography>
				<TextField size="small"  type="password" className={classes.tf} sx={{
					width:{
						xs:350,
						sm:480,
					}}
					}/>
				<Typography variant="subtitle1"  gutterBottom className={classes.sub2}>Forgot Password ?</Typography>
				<Button variant="contained" className={classes.link1}><BsArrowRightShort fontSize="40px"/> </Button>
				<Typography variant="subtitle1" gutterBottom className={classes.new}>New User ? <a href="#"> Sign Up</a></Typography>	
			</Grid>
			<Grid item md={6} className={classes.img} display={{ xs: 'none', sm:'none', md: 'none' ,lg:'block'}} >
			<Image src={MainPic} alt="IMAGE" height="640px" width="700px" />
			</Grid>
		</Grid>
		</Grid>
	);
}

export default Signin;
