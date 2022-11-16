import { Stack } from "@mui/material";
import HeroContent from "../components/LandingPage/HeroContent";
import NavBar from "../components/LandingPage/NavBar";


const LandingPage = () => {
	return (
		<Stack>
			<NavBar />
			<HeroContent />
		</Stack>
	);
}

export default LandingPage;
