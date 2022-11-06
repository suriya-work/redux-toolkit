import React from 'react';
//MUI
import { Grid, Box } from '@mui/material/';

const Banner = () => {
    return (
        <Box sx={{ width: '100%', color: "#081730", alignItems: "center" , flexDirection:"column"}}>
            <Grid container >
                <Grid  item xs={12} md={6} lg={6} >
                    <span>Experience The</span>{" "}
                    <span>
                        <b>Best Qulaity Music</b>
                    </span>
                    <span>
                        Donec Loareet nec velit vitea aliquam. Ut quis tincidunt purus
                        <br />
                        Suspendisse in leo non risus tincidunt lobortis
                    </span>

                </Grid>

            </Grid>
        </Box>
    );
};

export default Banner;