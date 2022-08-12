import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useContext } from "react";
import Layout from "../components/common/layout/Layout";
import { ThemeContext } from "../theme/RitrovoThemeContext";

const Home = () => {
	const { toggleThemeMode } = useContext(ThemeContext)

	return (
		<>
			<Typography>Hehe</Typography>
		</>
	)
}

Home.getLayout = (page) => (
	<Layout>{ page }</Layout>
)
 
export default Home;
