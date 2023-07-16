import { List } from "@mui/material";
import { Divider } from "@mui/material";
import { ListItem } from "@mui/material";
import styled from "@emotion/styled";
import { Stack } from '@mui/material';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Toolbar } from "@mui/material";
import { Drawer } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ThemeSwitcher from "../common/ThemeSwitcher";

const RightBar = () => {
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "22px", fontWeight: "700", display: "flex", justifyContent: "center", marginTop: "30px"
    }));
    const SubTitle = styled(Typography)(({ theme }) => ({
        fontSize: "17.5px", fontWeight: "600"
    }));
    const Date = styled(Typography)(({ theme }) => ({
        fontSize: "14px", fontWeight: "500", marginRight: "10px"
    }));
    const Data = styled(Typography)(({ theme }) => ({
        fontSize: "12px", fontWeight: "500", marginRight: "10px"
    }));
    const Register = styled(Typography)(({ theme }) => ({
        fontSize: "12px", fontWeight: "500", height: "30px", width: "103px", background: "#287EFF", color: "#fff", borderRadius: '7px', display: "flex", justifyContent: "center", alignItems: "center", padding: "0px 20px", marginLeft: "10px"
    }));
    return (
        <Drawer
            variant='persistent'
            open={true}
            anchor='right'
            PaperProps={{
                sx: {
                    backgroundColor: "background.default",
                    width: "345px",
                    overflowX: "hidden",
                    "&.MuiDrawer-paper": { borderWidth: 0 }
                }
            }
            }
        >
            <Toolbar sx={{ position: "relative", top: "0px", margin: "2px", left: "170px" }}>
                <ThemeSwitcher />
                <NotificationsIcon sx={{ color: "#287EFF" }} />
                <Box sx={{ paddingLeft: "10px" }}>
                    <Avatar />
                </Box>
            </Toolbar>
            <Title>Events</Title>
            <List>
                <ListItem>
                    <Box sx={{
                        p: 3, border: '1px solid #B3B3B3', borderRadius: '22px', width: '500px'
                    }}>
                        <SubTitle>Enigma</SubTitle>
                        <Stack direction={'row'}>
                            <Typography sx={{ marginRight: "5px", color: "#979595", fontSize: "15px", fontWeight: "600" }} >Level up DSA <br></br>24 Sept-26Sept</Typography>
                            <Register style={{ textTransform: 'none', position: "relative", top: "25px" }}>Register</Register>
                        </Stack>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box sx={{ p: 3, border: '1px solid #B3B3B3', borderRadius: '22px', width: '500px' }}>
                        <SubTitle>Robotics Society</SubTitle>
                        <Stack direction={'row'}>
                            <Typography sx={{ marginRight: "20px", color: "#979595", fontSize: "15px", fontWeight: "600" }}>Robocon <br></br>02Oct-04Oct</Typography>
                            <Register style={{ textTransform: 'none', position: "relative", top: "28px" }}>Register</Register>
                        </Stack>
                    </Box>
                </ListItem>
            </List>
            <Divider variant="middle" sx={{ borderBottomWidth: 1.5, marginTop: "20px" }} />
            <List>
                <Title>Notice Board</Title>
                <ListItem>
                    <Box sx={{ p: 2, border: '1px solid #B3B3B3', borderRadius: '22px', width: '356px' }}>
                        <Stack direction={'row'}>
                            <Date>01/10<br></br>2022</Date>
                            <Data>Notice for Wailk-In Interview for Yoga Instructor</Data>
                            <Button style={{
                                textTransform: 'none', fontSize: "12px", color: '#287EFF', alignItems: "right"
                            }}>View</Button>
                        </Stack>
                    </Box>
                </ListItem>
            </List>
        </Drawer>
    );
};
export default RightBar;