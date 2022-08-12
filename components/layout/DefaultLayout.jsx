import { Grid } from "@mui/material";
import { styled, Stack } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const DefaultLayout = ({ children }) => {
	return (
		<Grid container columnSpacing={2} minHeight='100vh'>
			<Grid item xs={2}><Sidebar/></Grid>
			<Grid item xs={10}>{children}</Grid>
		</Grid>
	);
};

export default DefaultLayout;