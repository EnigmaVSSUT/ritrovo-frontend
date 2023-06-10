import { Typography, Box, TextField, Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { FormControlLabel, Checkbox } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import styled from "@emotion/styled";
const SignUpForm = () => {
	const CustomBox = styled(Box)(({ theme }) => ({
		display: "flex", 
		justifyContent: "center", 
		gap: theme.spacing(5), 
		marginTop: theme.spacing(2),
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
			gap: theme.spacing(0),
		}
	}));
	const Title = styled(Typography)(({ theme }) => ({
		fontSize: "64px",
		fontWeight: "600",
		fontFamily: 'poppins',
		margin: "10px 20px",
		margin: theme.spacing(4, 0, 4, 0),
		[theme.breakpoints.down("sm")]: { fontSize: "40px" }
	}));
	const Label = styled(Typography)(({ theme }) => ({
		fontSize: "24px",
		fontWeight: "500",
		fontFamily: 'poppins',
		[theme.breakpoints.down("sm")]: { fontSize: "18px" }
	}));
	const Ibox = styled(Box)(({ theme }) => ({
		flex: "1.25",
		[theme.breakpoints.down("md")]: { display: 'none' }
	}));
	const Tfield = styled(TextField)(({ theme }) => ({
		height: '67px',
		width: '290px',
		background: '#FAFBFF',
	}));
	const Pfield = styled(TextField)(({ theme }) => ({
		width: '627px',
		height: '67px',
		background: '#FAFBFF',
		[theme.breakpoints.down("md")]: { width: '290px' }
	}));
	return (
		<>
			<Box sx={{ minHeight: "80vh", margin: '0 40px' }}>
				<Toolbar>
					<img src="./logo.png" alt="" style={{ height: '40px', width: '40px' }} />
					<Label sx={{
						fontWeight: '600',
						fontSize: '32px',
						lineHeight: '48px',
						padding: '0 21px',
					}}>Ritrovo</Label>
				</Toolbar>
				<CustomBox>
					<Box sx={{ flex: "1", }} mx={4}>
						<Title variant="h3">Sign Up</Title>
						<CustomBox >
							<Box sx={{ flex: '1' }}>
								<Label my={1} >Username</Label>
								<Tfield size="small" />
							</Box>
							<Box sx={{ flex: '1', }}>
								<Label my={1} >Email</Label>
								<Tfield size="small" />
							</Box>
						</CustomBox>
						<Box sx={{ flex: '1' }} marginTop={2}>
							<Label my={1} marginBottom={1}>Password</Label>
							<Pfield size="small" type="password" />
							<FormControlLabel label='I’ve read and agree with all the Terms and conditions and Privacy policy' control={<Checkbox />} sx={{ marginTop: "10px" }} />
							<Button variant="contained" size="small" sx={{
								textTransform: "capitalize",
								margin: "40px 0",
								backgroundColor: "#287EFF",
								borderRadius: "29px",
								boxShadow: '1px 8px 7px rgba(40, 126, 255, 0.5)',
								height: '67px',
								width: "79px"
							}}>
								<EastIcon fontSize="medium" />
							</Button>
							<Typography>Already have an account? <a href="#">sign in</a></Typography>
						</Box>
					</Box>
					<Ibox>
						<img src="./SignUp/signup.png" alt="" style={{ maxWidth: "100%", marginBottom: "2.5rem", top: '20px' }} />
					</Ibox>
				</CustomBox>
			</Box>
		</>

	);
}
export default SignUpForm;