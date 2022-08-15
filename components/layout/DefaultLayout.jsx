import { Grid } from "@mui/material";
import ThemeSwitcher from "../common/ThemeSwitcher";
import Sidebar from "../Sidebar/Sidebar";

const DefaultLayout = ({ children }) => {
	return (
		<>
			<Grid container columnSpacing={2} minHeight='100vh'>
				<Grid item xs={2}><Sidebar/></Grid>
				<Grid item xs={10}>{children}</Grid>
			</Grid>
			<ThemeSwitcher />
		</>
	);
};

export default DefaultLayout;