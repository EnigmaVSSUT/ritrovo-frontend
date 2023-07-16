import { Stack } from "@mui/material";
import { MAIN_SIDEBAR_WIDTH } from "../../lib/constants/constants";
import Sidebar from "../Sidebar/Sidebar";
import RightBar from "../Sidebar/Rightbar";
import Topbar from "../Topbar/Topbar";
const DefaultLayout = ({ children }) => {
	return (
		<>
		<Stack direction='row'>
			<Sidebar />
			<Topbar />
			<Stack
				flexGrow={1}
				marginLeft={MAIN_SIDEBAR_WIDTH}
				marginRight="350px"
				marginTop={"70px"}
			>
				{children}
			</Stack>			
			<RightBar />
		</Stack>
		</>
	);
};

export default DefaultLayout;
