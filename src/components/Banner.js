import React from 'react';
//MUI
import { Grid, Box } from '@mui/material/';
//Image
// import back from "../image/backgraphics.png";
import mobile from "../image/p.png";
import Pleyer from "../image/p 2.png";
// import irpad from "../image/p 3.png";
import haert from "../image/p 4.png";
//Components
import DownloadAds from './DownloadAds';

const Banner = () => {
    return (
        //Left Side
        <>
            <Box sx={{ width: '100%', height: '60rem', backgroundColor: "#081730", paddingTop: "14rem", position: 'relative', zIndex: '3' }}>
                <Grid container sx={{ justifyContent: 'space-around' }}>
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
                        <Grid sx={{ fontSize: '12px', paddingTop: '3rem', color: '#fff' }}>
                            <Grid>
                                <span>Download now on IOS and Android</span>
                                <DownloadAds />
                            </Grid>
                        </Grid>

                    </Grid>
                    {/* {//Right Side} */}
                    <Box sx={{ position: 'relative', width: '50%', top: '19rem' }}>
                        <Grid sx={{ display: { xs: '12', sm: '12', md: '6', xl: '6' } }}>
                            {/* <Grid sx={{ position: 'absolute', top: '-8rem', left: '19rem' , backgroundSize:'cover' , background:'fixed' }}>
                                <img src={back} alt="back icon" />
                            </Grid> */}

                            <Grid sx={{ height: '3rem', position: 'absolute', left: '14rem', top: '-24rem' }}>
                                <img src={mobile} alt="mobile go" />
                            </Grid>
                            <Grid sx={{ position: 'absolute', left: '255px', top: '94px', width: '160px' }}>
                                <img src={Pleyer} alt="Pleyer go" />
                            </Grid>
                            {/* <Grid sx={{ position: 'absolute', width: '.5rem', left: '11rem', top: '10rem' }}>
                                <img src={irpad} alt="irpad go" />
                            </Grid> */}
                            <Grid sx={{ position: 'absolute', left: '6rem', top: '5.5rem' }}>
                                <img src={haert} alt="haert go" />
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Box>

        </>

    );
};

export default Banner;