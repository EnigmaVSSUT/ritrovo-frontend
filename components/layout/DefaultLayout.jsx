import { Stack } from "@mui/material";
import { MAIN_SIDEBAR_WIDTH } from "../../lib/constants/constants";
import Sidebar from "../Sidebar/Sidebar";
import RightBar from "../Sidebar/Rightbar";
const DefaultLayout = ({ children }) => {
	return (
		<Stack
			direction='row'
>
			<Sidebar />
			<Stack
				flexGrow={1}
				marginLeft={ MAIN_SIDEBAR_WIDTH }
				marginRight="350px"
			>
				{children}
			</Stack>
			<RightBar />
		</Stack>
	);
};

export default DefaultLayout;
