import { Card, Typography, CardHeader, Avatar,CardMedia} from "@mui/material"
import Likesection from "./Likesection";
import Comment from "./Comment"


const Postdetails = () => {
    return ( 
        <Card sx={{ maxWidth: 800}}>
            <CardHeader
            avatar={
              <Avatar alt="Enigma logo" src="./enigmaa.png" />
            }
        title="enigma_vssut"
      />
      <Typography variant="body2" p={2.5}>
      Cloud computing helps schools to meet data protection obligations to ensure student and employee information is kept safe. Most cloud providers invest in security measures that provide a base level of security on their cloud infrastructure. 
      </Typography>
      <CardMedia 
        component="img"
        sx={{pl:2,pb:2,pr:2}}
        image="/postimg.jpg"
        alt="post image"
        />
        <Likesection />
        <Comment/>
        </Card>
   
     );
}
 
export default Postdetails;