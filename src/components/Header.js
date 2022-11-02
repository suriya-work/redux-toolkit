import React, { useState } from 'react';
//Mui
import { Box, PropTypes, AppBar, Divider, Drawer, Button, Toolbar, List, ListItem, ListItemButton, ListItemText, IconButton, MenuIcon } from '@mui/material/';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//Components
// import CenterMenu from './CenterMenu';
//STYLES
// import styles from "./styles/Header.module.css";
//IMAGES
import Logo from "../image/MuzicLogo.png";
//Menu
const navItems = ['Home', 'About', 'Preformer', 'Event Shedule'];
const Header = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

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
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    // const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component='nav'>
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
                    <img src={Logo} alt="LogoMenu" />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }}>
                                {item}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>

            </AppBar>
            {drawer}
        </Box>

    );
};

export default Header;