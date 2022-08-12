import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../theme/RitrovoThemeContext";

const Home = () => {
	const { toggleThemeMode } = useContext(ThemeContext)

	return (
		<>
			<Typography>Hehe</Typography>
			<Button
				variant='contained'
				onClick={toggleThemeMode}
			>
				Switch theme
			</Button>
		</>
	)
}
 
export default Home;
