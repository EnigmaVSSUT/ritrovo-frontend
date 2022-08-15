import { createTheme } from "@mui/material"
import darkPalette from "./options/darkPalette"
import lightPalette from "./options/lightPalette"
import typography from "./options/typography"
import components from "./options/components"

const getTheme = ( mode ) => {
	const palette = mode === 'dark' ? darkPalette : lightPalette
	
	return createTheme({
		typography,
		palette,
		components
	})
}

export default getTheme
