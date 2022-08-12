import { createTheme } from "@mui/material"
import darkPalette from "./options/darkPalette"
import lightPalette from "./options/lightPalette"
import typography from "./options/typography"

const getTheme = ( mode ) => {
	const palette = mode === 'dark' ? darkPalette : lightPalette
	
	return createTheme({
		typography,
		palette
	})
}

export default getTheme
