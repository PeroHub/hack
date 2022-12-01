import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import DrawerAppBar from './DrawerAppBar';
import { Link } from 'react-router-dom';
import family from '../../family.jpg'
const tem = [
    // {name: 'Home', link: '/'},
    {name: 'About', link: '/About'},
  ];

  

export default function Home() {
  return (
    <DrawerAppBar>
        <Box mt={8}>
            <Box sx={{display: {md: "flex"}, justifyContent: "space-between", alignItems: "center"}}>
                <Box mb={{xs: 4}} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: {xs: "center", md: "flex-start"}}}>
                <Typography mb={1} variant='h4'>Get peace of mind</Typography>
                <Typography mb={2} variant='body1'>It takes less than 20 minutes to write or  update your legal will, for free.</Typography>
                <Link to="form/" style={{textDecoration: "none"}}>
                    <Button  variant='contained'>Generate will</Button>
                </Link>
                </Box>
                <Box sx={{width: {xs: "100vw", md: "40vw"}, height: "60vh"}}>
                <img src={family} style={{width: "100%", height: "100%"}} alt="family"/>
                </Box>

            </Box>
        </Box>
    </DrawerAppBar>
  )
}
