import { Grid } from "@mui/material";
import { styled, Stack } from "@mui/material";
import { MAIN_SIDEBAR_WIDTH } from "../../lib/constants/constants";
import Sidebar from "../Sidebar/Sidebar";

const DefaultLayout = ({ children }) => {
	return (
		// <Grid container columnSpacing={2} minHeight='100vh'>
		// 	<Grid item xs={2}><Sidebar/></Grid>
		// 	<Grid item xs={10}>{children}</Grid>
		// </Grid>
		<Stack
			direction='row'
		>
			<Sidebar />
			<Stack
				flexGrow={1}
				marginLeft={ MAIN_SIDEBAR_WIDTH }
			>
				{children}
			</Stack>
		</Stack>
	);
};

export default DefaultLayout;
