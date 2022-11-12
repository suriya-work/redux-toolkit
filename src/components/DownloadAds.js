import React from 'react';
//MUI
import { Grid, Box } from '@mui/material/';
//IMAGE
import store from "../image/Store.png";
import play from "../image/Google Play.png"
const DownloadAds = () => {
   
    return (
        <Box>
            <Grid  sx={{ borderRadius: '2px  #232A4E' }}>
                <img src={store} alt="store img"/>
            </Grid>
            <Grid  sx={{ borderRadius: '2px  #232A4E' }}>
                <img src={play} alt="Google Play" />
            </Grid>
        </Box>
    );
};

export default DownloadAds;