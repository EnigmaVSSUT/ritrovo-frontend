import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Paper,TextField,Button } from '@mui/material';

export default function AlignItemsList() {
  return (
    <div>
    <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper',maxHeight:200,overflow:'scroll' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SamSoham"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontWeight:'bold' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.46PM
              </Typography>
              {" — Fortune favors the bold...."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Ashutosh_147"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontWeight:'bold' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.50PM
              </Typography>
              {" — People says nothing is impossible but I do nothing everyday"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="DJ_Bhai"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontWeight:'bold' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                9.30PM
              </Typography>
              {" — Have no fear of perfection, you'll never reach it"}
            </React.Fragment>
          }
        />
      </ListItem> 
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="SamSoham"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',fontWeight:'bold' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                8.46PM
              </Typography>
              {" — Fortune favors the bold...."}
            </React.Fragment>
          }
        />
      </ListItem>
     
    </List>
    <Paper sx={{display:'flex',justifyContent:'space-between',padding:'15px'}}>
    <TextField
      variant="standard"
       size="small"
       sx={{flex:'1'}}
       placeholder="Add a comment"
          />
      <Button variant="contained" size="small" sx={{backgroundColor:"#287EFF",paddingLeft:'5px'}}>
        Post
      </Button>
    </Paper>
    </div>
  );
}