import React, { useState } from 'react';
//Mui
import { Box, AppBar, Divider, Drawer, Button, Toolbar, List, ListItem, ListItemButton, ListItemText, Grid } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//STYLES
import styles from "./styles/Header.module.css";
//IMAGES
import Logo from "../image/MuzicLogo.png";
//Menu
const drawerWidth = 200;
const navItems = ['Home', 'About', 'Preformer', 'Event Shedule'];
const Header = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    //Function
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img src={Logo} alt="LogoMenu" />
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} id={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>

            <AppBar sx={{ backgroundColor: "#081730", boxShadow: "none", padding: "20px" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={Logo} alt="LogoMenu" className={styles.img} />
                    <Box sx={{ margin: 'auto', display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <>
                                <Button key={item} id={item} sx={{ color: '#fff', fontSize: "12px", margin: "8px", textTransform: 'none' }}>
                                    {item}
                                </Button>

                            </>
                        ))}
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10rem' }} variant="outlined">Log in</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                        <Button sx={{ textTransform: 'none', color: '#fff', borderRadius: '10px', fontSize: '12px', padding: '4px 18px', marginLeft: '10px' }}>Sign Up</Button>
                    </Box>
                </Toolbar>

            </AppBar>
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>

    );
};

export default Header;