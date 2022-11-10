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
			<RightBar />
			<Stack
				flexGrow={1}
				marginLeft={ MAIN_SIDEBAR_WIDTH }
			>
				{children}
			</Stack>
			
		</Stack>
	);
};

export default DefaultLayout;
