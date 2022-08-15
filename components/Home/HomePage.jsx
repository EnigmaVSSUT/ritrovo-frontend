import { Divider } from "@mui/material";
import { Stack } from "@mui/material";
import { Grid } from "@mui/material";
import React from "react";
import FeedsList from "./Feeds/FeedsList";
import EventsList from "./Events/EventsList";
import LatestPost from "./Posts/LatestPost";

const HomePage = () => {
	return (
		<Grid container height="100%">
			<Grid item xs={8}>
				<FeedsList />
			</Grid>

			<Grid item xs={4}>
				<Stack height="100%">
					<EventsList />

					<Divider variant="middle" />

					<LatestPost />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default HomePage;
