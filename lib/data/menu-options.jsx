import {
	HomeRounded,
	MessageRounded,
	AccountCircleRounded,
	SettingsRounded,
    PostAddRounded
} from "@mui/icons-material";
import React from "react";

const MenuOptions = [
	{
		title: "Home",
		icon: <HomeRounded color="primary" />,
		link: "/",
	},
	{
		title: "Messages",
		icon: <MessageRounded color="primary" />,
		link: "/messages",
	},
	{
		title: "Profile",
		icon: <AccountCircleRounded color="primary" />,
		link: "/profile",
	},
	{
		title: "Posts",
		icon: <PostAddRounded color="primary" />,
		link: "/posts",
	},
	{
		title: "Settings",
		icon: <SettingsRounded color="primary" />,
		link: "/settings",
	},
];

export default MenuOptions;
