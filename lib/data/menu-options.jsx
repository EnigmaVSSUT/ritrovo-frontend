import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedIcon from '@mui/icons-material/Feed';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CreateIcon from '@mui/icons-material/Create';
const MenuOptions = [
	{
		title: "Home",
		icon: <HomeIcon color="#979595" />,
		link: "home",
	},
	{
		title: "Profile",
		icon: <PersonIcon color="#979595" />,
		link: "profile",
	},
	{
		title: "Quora VSSUT",
		icon: <FeedIcon color="#979595" />,
		link: "quora",
	},
	{
		title: "Academics Corner",
		icon: <SchoolIcon color="#979595" />,
		link: "academics",
	},
	{
		title: "Clubs & Societies",
		icon: <LightbulbIcon color="#979595" />,
		link: "clubs",
	},
	{
		title: "The ViSSion",
		icon: <CreateIcon color="#979595" />,
		link: "vission",
	},
	{
		title: "Settings",
		icon: <SettingsIcon color="#979595" />,
		link: "settings",
	},
];

export default MenuOptions;