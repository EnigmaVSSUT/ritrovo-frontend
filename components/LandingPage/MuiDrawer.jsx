import { Drawer, Box, Typography, IconButton, Grid, CssBaseline } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { makeStyles } from "@mui/styles";
const useStyles1 = makeStyles((theme) => ({
  nav_links: {
    marginLeft: theme.spacing(10),
    display: "flex",
    flexDirection: "column"
  },
  link: {
    textDecoration: "none",
    color: "#000000",
    fontWeight: '600',
    fontSize: '20px',
    marginTop: theme.spacing(2.5),
    marginBottom: theme.spacing(2),
    "&:hover": {
      color: "#287EFF",
      borderBottom: "1px solid #287EFF",
    },
  },
  link1: {
    position: "relative",
    right: "8px",
    textDecoration: "none",
    color: "#ffffff",
    background: '#287EFF',
    borderRadius: '15px',
    fontWeight: '500',
    fontSize: '17.5px',
    padding: theme.spacing(1, 4),
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(2),

    boxShadow: '4px 5px 5px 2px #b8b8b8 ',
    "&:hover": {
      color: "#bfbfbf",
    },
  },
}));

export const MuiDrawer = () => {
  const classes = useStyles1();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <CssBaseline />
      <Box display={{ xs: "block", sm: 'block', md: 'block',lg:'none' }}>
        <IconButton
          onClick={() => setIsDrawerOpen(true)}
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Drawer
        anchor='right'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box width='200px' role='presentation' textAlign='left' >
          <Grid className={classes.nav_links} >
            <a href="/" className={classes.link}>Home</a>
            <a href="/about" className={classes.link}>About Us</a>
            <a href="/contact" className={classes.link}>Contact Us</a>
            <a href="/faq" className={classes.link1}>Sign In</a>
          </Grid>
        </Box>
      </Drawer>
    </>
  )
}