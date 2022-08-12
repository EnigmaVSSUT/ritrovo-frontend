import { Typography, Button, AppBar, Toolbar } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../../../theme/RitrovoThemeContext";

const MainAppBar = () => {
	const { toggleThemeMode } = useContext(ThemeContext)

	return (
		<AppBar>
			<Toolbar
				sx={{
					justifyContent: 'space-between'
				}}
			>
				<Typography>
					Ritrovo
				</Typography>
				<Button
					variant='outlined'
					onClick={toggleThemeMode}
					color='secondary'
				>
					Switch theme
				</Button>
			</Toolbar>
		</AppBar>
	)
}
 
export default MainAppBar;
