import { ThemeProvider } from "@mui/material"
import { createContext, useState } from "react"
import getTheme from "./getTheme"
const ThemeContext = createContext()

const RitrovoThemeContext = ({ children }) => {
	const [themeMode, setThemeMode] = useState('light')	
	
	const toggleThemeMode = () => {
		console.log('toggle')
		setThemeMode(themeMode === 'light' ? 'dark' : 'light') 
	}

	return (
		<ThemeContext.Provider
			value={{
				themeMode,
				toggleThemeMode
			}}
		>
			<ThemeProvider
				theme={ getTheme(themeMode) }
			>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}

export {
	RitrovoThemeContext,
	ThemeContext
}
