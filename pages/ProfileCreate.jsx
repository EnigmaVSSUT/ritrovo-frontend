import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import { TextField, Button, Typography, Grid, Toolbar, CssBaseline, Fab, FormControl } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { Stack } from "@mui/material";

const ProfileCreate = () => {

	return (
		<Stack marginLeft="287px" paddingLeft="100px" paddingRight="100px" marginRight="379px" width="767px">
			<TextField
				margin="dense" value="" placeholder="Search"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				variant="outlined"
			/>
			<Button height="309px" variant="contained">Add an Image <AddIcon /> </Button>
			<Typography>Write a Caption</Typography>
			<TextField
				margin="dense" value="" variant="outlined"
			/>
			<Button 
			variant="contained">Post </Button>
		</Stack>
	)
}

export default ProfileCreate;
