import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { useContext } from "react";
import DefaultLayout from "../components/layout/DefaultLayout";
import { ThemeContext } from "../theme/RitrovoThemeContext";
import HomePage from "../components/Home/HomePage"

const Home = () => {
	const { toggleThemeMode } = useContext(ThemeContext);

	return (
		<Grid container columnSpacing={1} height="100%">
			<Grid item xs={8}>
				<HomePage />
				<Divider
					orientation="vertical"
					variant="middle"
					sx={{ maxHeight: "92%" }}
				/>
			</Grid>
			<Grid item xs={4}>
				<Button variant="outlined" onClick={toggleThemeMode} color="primary">
					Switch theme
				</Button>
			</Grid>
		</Grid>
	);
};

Home.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default Home;
