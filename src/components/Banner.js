import React from 'react';
//MUI
import { Grid, Box } from '@mui/material/';
//Image
import music from "../image/music.png";
//Components
import DownloadAds from './DownloadAds';

const Banner = () => {
    return (
        //Left Side
        <>
            <Box sx={{ width: '100%', height: 'auto', backgroundColor: "#081730", paddingTop: "14rem" }}>
                <Grid container sx={{ justifyContent: "space-around" }} >
                    <Grid sx={{ height: '100%', display: { xs: '12', sm: '12', md: '6', xl: '6' } }} >
                        <Grid sx={{ color: '#fff', fontSize: '28px', lineHeight: '1.5' }}>
                            <span>Experience The</span>{" "}
                            <br />
                            <span>
                                <b>Best Qulaity Music</b>
                            </span>
                            <br />
                        </Grid>
                        <Grid sx={{ fontSize: '15px', color: '#525D6E', lineHeight: '1.5' }}>

                            <span>
                                Donec Loareet nec velit vitea aliquam. Ut quis tincidunt purus
                                <br />
                                Suspendisse in leo non risus tincidunt lobortis
                            </span>
                        </Grid>
                        {/* //download  ads*/}
                        <Grid sx={{ fontSize: '12px', paddingTop: '3rem' , color:'#fff' }}>
                            <div>
                                <span>Download now on IOS and Android</span>
                                <DownloadAds />
                            </div>
                        </Grid>

                    </Grid>
                    <Box>
                        <Grid sx={{ display: { xs: '12', sm: '12', md: '6', xl: '6' } }}>
                            <img src={music} alt="music icon" />
                        </Grid>
                    </Box>
                </Grid>

            </Box>

        </>

    );
};

export default Banner;