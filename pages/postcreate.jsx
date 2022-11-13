import React from "react";
import { useRouter } from 'next/router'
import DefaultLayout from '../components/layout/DefaultLayout';
import { Box, Grid, Button, Typography, TextField } from "@mui/material";
import Link from 'next/link'
import "@fontsource/poppins";
import AddIcon from '@mui/icons-material/Add';


const PostCreate = () => {
	const router = useRouter();
	const app = router.query.page;
	return (
		<div>

			<Grid height='730px' sx={{
				backgroundColor: 'gray.main',
				width: "50rem",
				borderRadius: 5,
				padding: 0,
				margin: 0
			}}>
				<Box sx={{
					position: 'relative',
					width: '569px',
					height: '309px',
					border: '1px solid',
					borderColor: "gray.post",
					borderRadius: '20px',
					left: '9.5rem',
					textAlign: 'center',
					top: '40px',
					backgroundColor: 'background.default',

				}}>
					<Typography variant="title">
						Add an Image

						<Box sx={{
							position: 'relative',
							marginLeft: 25,
							bottom: 29,

						}}><Link href="/"><a><AddIcon sx={{ color: "primary.main", fontWeight: 800 }} /></a></Link>
						</Box></Typography>
				</Box>
				<Typography variant="title1">Write a Caption </Typography><br />
				<TextField variant="standard" size="large" InputProps={{
					disableUnderline: true,
				}} sx={{
					position: 'relative',
					width: 569,
					borderRadius: '15px',
					left: '9.5rem',
					textAlign: 'center',
					top: '105px',
					border: '1px solid',
					borderColor: "gray.post",
					backgroundColor: 'background.default',
					paddingLeft: 2,
					fontFamily: "poppins",
					paddingRight: 2,
					"& .MuiInputBase-root": {
						height: 108
					}
				}} />
				<Button variant="contained" sx={{
					position: 'relative',
					textDecoration: "none",
					color: "background.default",
					backgroundColor: 'blue.primary',
					borderRadius: '7px',
					fontWeight: '500',
					fontSize: '14px',
					padding: 1,
					right: '24rem',
					top: "40%",
					width: 120,
					height: 40,
					fontFamily: "poppins",
					"&:hover": {
						color: "gray.secondary",
					}
				}}>Post</Button>
			</Grid>
		</div>

	);
}
PostCreate.getLayout = (app) => <DefaultLayout>{app}</DefaultLayout>;

export default PostCreate;