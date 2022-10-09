import React, { useContext } from "react";
import { ThemeContext } from "../../theme/RitrovoThemeContext";
import { DarkModeRounded } from "@mui/icons-material";
import { LightModeRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const ThemeSwitcher = () => {
	const { toggleThemeMode, themeMode } = useContext(ThemeContext);

	return (
		<IconButton
			onClick={toggleThemeMode}
			color="primary"
			sx={{ position: "fixed", top: "0px", right: "0px", margin: "2px" }}
		>
			{themeMode === "light" ? <DarkModeRounded /> : <LightModeRounded />}
		</IconButton>
	);
};

export default ThemeSwitcher;
