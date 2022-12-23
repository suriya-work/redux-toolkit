import React from 'react';
//MUI
import { Grid, Box } from "@mui/material";
//Style
import styles from "./styles/DownloadAds.module.css";
//IMAGE
import store from "../image/Store.png";
import play from "../image/Google Play.png"
const DownloadAds = () => {

    return (
        <Box sx={{paddingTop:'10px' , display:"flex" , width:'100%'}}>
            <Grid sx={{width:'100%' , marginRight:'2rem'}}>
                <img className={styles.image} src={store} alt="store img" />
            </Grid>
            <Grid>
                <img className={styles.image} src={play} alt="Google Play" />
            </Grid>
        </Box>
    );
};


export default DownloadAds;