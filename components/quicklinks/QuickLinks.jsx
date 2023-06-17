import { Box, List, ListItem, Typography } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
const quicklinks= ()=>{
    const arr = ["SAMARTH ERP-LOGIN","SEM REG FEE PAYMENT","APPROVALS & ACCREDATION","Inofrmation Brouchure","Seminar & Workshop","Holiday List","Placement Cell","RTI","Samarth ERP-LOGIN"]
    
    return(
        <Box margin={2} width="max-content" >
            <Typography
                sx={{
                    backgroundColor:"rgb(40, 126, 255)",
                    width:"max-content",
                    position:"static",
                    borderRadius:"9px",
                    fontSize:'1.35rem',
                    letterSpacing:'3px',
                }}
                padding={1}
                paddingLeft={2}
                paddingRight={2}
                color="white"
                variant="title"
            >QUICK LINKS @ VSSUT </Typography>
            <List
            sx={{
                // width:"%"
            }}
            >
                {arr.map((item, index)=>(
                    <ListItem
                        key={index}
                        sx={{
                            borderBottom:"2px solid black",
                        }}
                    >
                        <CircleIcon sx={{
                            color:"black",
                            fontSize:"10px",
                            padding:"0px",
                            margin:"0px"
                        }}
                        />
                        <Typography
                        paddingLeft={2}
                            variant="subtitle3"
                        >
                        {item}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
export default quicklinks;
