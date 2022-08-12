import { styled, Stack } from "@mui/material";
import MainAppBar from "../Appbar/MainAppbar";

const Offset = styled('div')(({theme}) => theme.mixins.toolbar)

const Layout = ({ children }) => {
	return (
		<Stack
			minHeight='100vh'
		>
			<MainAppBar />
			<Offset />
			<Stack
				flexGrow={1}
			>
				{ children }
			</Stack>
		</Stack>
	)
}
 
export default Layout;
