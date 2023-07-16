import { Drawer, Box, Typography, IconButton, Grid, CssBaseline } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
export const MuiDrawer = () => {
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
        <Box width='270px' role='presentation' textAlign='left' >
          <Grid sx={{
            marginLeft:"80px",
            display: "flex",
            flexDirection: "column"
          }} >
            <Link to="/">
					<Typography variant="drawer" sx={{
						"&:hover": {
							color: "blue.primary",
							borderBottom: "1px solid",
							borderColor:"blue.primary",
						}
					}}><a>Home</a></Typography></Link>
						<Link to="/about">
						<Typography variant="drawer" sx={{
							"&:hover": {
								color: "blue.primary",
								borderBottom: "1px solid",
								borderColor:"blue.primary",
							}
						}}>About Us</Typography></Link>
						<Link to="/contact">
						<Typography variant="drawer" sx={{
							"&:hover": {
								color: "blue.primary",
								borderBottom: "1px solid",
								borderColor:"blue.primary",
							}
						}}>Contact Us</Typography></Link>
						<Link to="/faq">
						<Typography variant="drawer1" sx={{
							color: "background.default",
							backgroundColor: 'blue.primary',
							boxShadow: '4px 5px 5px 2px #b8b8b8 ',
              width:"120px",
							"&:hover": {
								color: "gray.secondary",
                
                
							},
						}}>Sign In</Typography></Link>
          </Grid>
        </Box>
      </Drawer>
    </> 
  )
}