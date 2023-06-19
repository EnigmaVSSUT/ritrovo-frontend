import { Stack, CardMedia, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import FeedsList from "./Feeds/FeedsList";
import EventsList from "./Events/EventsList";

const HomePage = () => {
	return (
		<Grid container height="100%">
			<Typography variant="h4" sx={{ pl: 2, pb: 2, pr: 2, pt: 5 }}>
				{" "}
				<strong>Hello Soham,</strong>{" "}
			</Typography>
			<Grid container spacing={2}>
			<CardMedia
				component="img"
				sx={{ pl: 2, pb: 2, pr: 2, pt:2 ,width: '90%', height: 'auto' }}
				image="/ssgimage.png"
				alt="post image"
			/>
</Grid>
			<Typography variant="h4" sx={{ pl: 2, pb: 2, pr: 2, pt: 2 }}>
				{" "}
				<strong>Today's Post</strong>{" "}
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<FeedsList />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default HomePage;
