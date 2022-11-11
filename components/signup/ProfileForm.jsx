import React from "react";
import { TextField,Button,Typography,Grid,Toolbar,CssBaseline} from "@mui/material";
//import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import MainPic from '/public/img.svg';
import logo from '/public/nav_logo.png';
import "@fontsource/poppins";

const ProfileForm = () => {
	
	return (
		<Grid >
			
			<CssBaseline />
			<Toolbar sx={{
				marginTop:"5px",marginLeft:"2px",position:"sticky"}}>
			<Image src={logo} alt="IMAGE" height="40px" width="40px"/>
			<Typography variant="h5" sx={{marginLeft:"20px", fontWeight:"700" }}>
			 Ritrovo
			</Typography>
			</Toolbar>
			
		   <Grid container height="100%">
				<Grid item xs={12} md={5.7} mx="18px">
			<Typography gutterBottom sx={{fontWeight:"700",fontSize:"48px",marginTop:"20px", marginBottom:"30px"}}>Profile Details</Typography>
			
				<Typography  gutterBottom sx={{fontWeight:"600",fontSize:"20px" ,marginBottom:"20px"}}>Name</Typography>
					<TextField size="small"  sx={{
						                                              width: {
							                                          xs: 300,
					sm: 480,
																	   marginBottom:"25px"
						}
					}} />
					<Typography variant="h6" gutterBottom sx={{fontWeight:"600",fontSize:"20px",marginBottom:"20px"}}>Registration Number</Typography>
					<TextField size="small" sx={{
						                                              width: {
							                                          xs: 300,
							sm: 480,marginBottom:"25px"
																	   
						}
					}} />
					<Typography variant="h6" gutterBottom sx={{fontWeight:"600",fontSize:"20px",marginBottom:"20px"}}>Graduation Year</Typography>
					<TextField size="small"  sx={{
						                                              width: {
							                                          xs: 300,
							                                           sm: 480,marginBottom:"25px"
						}
					}} />
					<Typography variant="h6" gutterBottom sx={{fontWeight:"600",fontSize:"20px",marginBottom:"20px"}}>Branch</Typography>
					<TextField size="small"  sx={{
						                                              width: {
							                                          xs: 300,
							                                           sm: 480,marginBottom:"25px"
						}
					}} />
					<br />
					<Button variant="contained" sx={{textTransform:"capitalize",
					backgroundColor:"#287EFF",borderRadius:"23px",padding:"10px",width:"200px",fontSize:"20px",marginBottom:"20px" }}>Register</Button> 
					
				
			</Grid>
				<Grid item md={6}  display={{ xs: 'none', sm:'none', md: 'none',lg:'none',xl:'block'
				}}>
			<Image src={MainPic} alt="IMAGE" height="640px"/>
			</Grid>
		</Grid>
		</Grid>
	);
}

export default ProfileForm;
