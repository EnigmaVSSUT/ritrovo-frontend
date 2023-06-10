import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import FeedsList from "./Feeds/FeedsList";
import EventsList from "./Events/EventsList";

const HomePage = () => {
	return (
		<Grid container height="100%">
			<Grid item xs={8}>
				<FeedsList />
			</Grid>

			<Grid item xs={4}>
				<Stack height="100%">
					<EventsList />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default HomePage;
