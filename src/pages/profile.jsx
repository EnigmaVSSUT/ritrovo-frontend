import React from "react";
import DefaultLayout from '../components/layout/DefaultLayout';
import { Box, Grid, Avatar, Button, Typography, Tab, Tabs, Stack } from "@mui/material";
import { IoIosAddCircleOutline } from 'react-icons/io';
import { Link } from "react-router-dom";


export default function App() {

    const [value, setValue] = React.useState(0)
    const handleTabs = (e, val) => {
        console.warn(val)
        setValue(val)
    }
    return (
        <DefaultLayout>
        <div>
            <Grid sx={{
                height: "125vh",
                backgroundColor: 'gray.main',
                borderRadius: '14px',
                marginTop:"40px",
                marginLeft:"20px"
            }}>
                <Box sx={{
                    position: 'absolute',
                    width: '56.7%',
                    height: '193px',
                    top: '110px',
                    background: 'linear-gradient(86.29deg, #899DBB 4.34%, rgba(137, 157, 187, 0.588687) 48.24%, rgba(137, 157, 187, 0) 105.36%)',
                    borderRadius: '14px'
                }}>

                </Box>

                <Avatar sx={{
                    height: '190px',
                    width: "190px",
                    border: '5px solid',
                    borderColor: 'gray.main',
                    position: "relative",
                    top: "120px",
                    marginLeft: '25px',
                }} />
                <Button variant="contained" sx={{

                    marginLeft: {
                        xs: "70%",
                        sm: "78%",
                        md: "70%",
                        lg: "80%"
                    },
                    fontSize: {
                        xs: '10px',
                        sm: '15px'
                    },
                    textDecoration: "none",
                    color: "text.primary",
                    backgroundColor: 'background.default',
                    borderColor: 'text.primary',
                    border: "1px solid",
                    borderRadius: '35px',
                    marginTop: 2,
                    fontFamily: "poppins",
                    "&:hover": {
                        color: "gray.secondary"
                    }
                }}>Edit profile</Button>
                <br />
                <Typography variant="head" sx={{
                    position: "relative",
                    left: '20px',
                    top: '60px',
                    paddingBottom: "10px"
                }}>
                    My Username
                </Typography>
                <br />
                <Typography variant="text" sx={{
                    position: "relative",
                    top: '55px',
                    left: '20px'
                }}>
                    @myuser_id
                </Typography>
                <br />
                <Typography variant="text" sx={{
                    position: "relative",
                    top: '90px',
                    fontFamily: "poppins",
                    left: '20px',
                    paddingBottom: '30px'
                }}>
                    Branch-Information Technology <br />
                    Registration no- 2102031097
                </Typography>
                <Box sx={{
                    position: "relative",
                    top: "130px"
                }}>
                    <Box sx={{
                        borderBottom: 2,
                        borderDivider: 'divider',
                        borderColor: 'gray.border',
                        fontFamily: "poppins",
                        fontWeight: 600,


                    }}>
                        <Tabs value={value} onChange={handleTabs} variant='fullWidth' centered>
                            <Tab label="Post" sx={{
                                fontSize: 18,
                                fontFamily: "poppins",
                                fontWeight: 600
                            }} />
                            <Tab label="Activity" sx={{
                                fontSize: 18,
                                fontFamily: "poppins",
                                fontWeight: 600
                            }} />
                            <Tab label="About" sx={{
                                fontSize: 18,
                                fontFamily: "poppins",
                                fontWeight: 600
                            }} />

                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <Box sx={{
                            position: 'relative',
                            marginLeft: '48%'
                        }}><Typography variant="sub" sx={{ color: 'gray.post' }}  >No Posts Yet <br /></Typography>
                            <Link to="/">
                                <a >  <Typography variant="sub1" sx={{ color: 'gray.post' }}
                                ><IoIosAddCircleOutline fontSize="120px" /></Typography></a></Link></Box>
                    </TabPanel>
                    <TabPanel value={value} index={1}>   <Box sx={{
                        position: 'relative',
                        marginLeft: '48%'
                    }}><Typography variant="sub" sx={{ color: 'gray.post' }}  >No Activity Yet <br /></Typography>
                        <Link to="/">
                            <a >  <Typography variant="sub1" sx={{ color: 'gray.post' }}><IoIosAddCircleOutline fontSize="120px" /></Typography></a></Link></Box></TabPanel>
                    <TabPanel value={value} index={2}>   <Box sx={{
                        position: 'relative',
                        marginLeft: '48%'
                    }}><Typography variant="sub" sx={{ color: 'gray.post' }}>No About Yet <br /></Typography>
                        <Link to="/" >
                            <a >  <Typography variant="sub1" sx={{ color: 'gray.post' }}><IoIosAddCircleOutline fontSize="120px" /></Typography></a></Link></Box>
                    </TabPanel>
                </Box>
            </Grid>
        </div>
        </DefaultLayout>
    );

}
function TabPanel(props) {
    const { children, value, index } = props;
    return (
        <div>
            {
                value === index && (
                    <h1>{children}</h1>
                )
            }
        </div>
    )
}