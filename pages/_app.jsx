import { CssBaseline } from "@mui/material";
import "../styles/globals.scss";
import { RitrovoThemeContext } from "../theme/RitrovoThemeContext";

function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page)

	if (Component.authRequired) {
    // TODO implement auth logic
	}

	return (
		<RitrovoThemeContext>
			<CssBaseline />
			{ getLayout(<Component {...pageProps} />) }
		</RitrovoThemeContext>
	)
}

export default MyApp
