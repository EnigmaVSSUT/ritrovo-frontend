import styled from "@emotion/styled";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const HeroContent = () => {
	const CustomBox= styled(Box)(({theme})=>({
		display:"flex",justifyContent:"center",gap: theme.spacing(5),marginTop: theme.spacing(3),
		[theme.breakpoints.down("sm")]:{flexDirection:"column",alignItems:"center",textAlign:"center"}
	}));
	const Title= styled(Typography)(({theme})=>({
		fontSize:"64px",fontWeight:"500",margin: theme.spacing(4,0,4,0),
		[theme.breakpoints.down("sm")]:{fontSize:"40px"}
	}));
	return ( 
		<Box sx={{minHeight:"80vh"}}>
             <Container>
				<CustomBox>
				<Box sx={{flex:"1"}}>
                  <Title variant="h2">Create Community & make Friends</Title>
				  <Typography sx={{fontSize:"24px",color:"#979595",marginBottom:"5vmin"}}>Join or make community with people who have same hobby with you</Typography>
				 
				  <Button href="/signup" variant="contained" sx={{textTransform:"capitalize",
					backgroundColor:"#287EFF",borderRadius:"12px",padding:"10px",width:"150px"}}>
					Get Started</Button>
				</Box>
				<Box sx={{flex:"1.25"}}>
					<Box component="img" src="./54950.jpg" alt="hero img" sx={{maxWidth:"88%",marginBottom:"2rem"}}/>
				</Box>
				</CustomBox>
			 </Container>
		</Box>
	 );
}
export default HeroContent;