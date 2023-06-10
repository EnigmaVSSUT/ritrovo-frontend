import { CardContent,Typography,Box } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';


const Likesection = () => {
    return ( 
        <CardContent sx={{display: "flex",justifyContent:"space-evenly",alignItems:"flex-end",}}>

        <Typography variant="body2" color="text.secondary" flex={1.8}  pb={1} sx={{borderBottom:1}}>
        7.46 PM . 14 Oct 2022
        
        </Typography>
        <Box flex={0.6} sx={{display: "flex",justifyContent:"space-between",alignItems:"center",borderBottom:1}} >
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Comment icon">
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="Comment icon">
          <SendRoundedIcon />
        </IconButton>
        </Box>
      </CardContent>
     );
}
 
export default Likesection;