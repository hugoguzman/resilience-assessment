import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tab, Tabs } from '@mui/material';
import { Link, Outlet } from "react-router-dom";
import NavDrawer from './NavDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';



export default function TopAppBar() {
  const [openDrawer, setOpenDrawer] = useState(true)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(isMobile);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      color="transparent"
      elevation={0}
      position='static'
      >
        <Toolbar>

            {isMobile ? (
            <NavDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            ) : ( <Tabs>
              <Tab label='Home'  to='/' component={Link} />
              <Tab label="Health & Wellbeing" to ='/health-and-wellbeing' component={Link} />
              <Tab label='Economy & Society' to ='/economy-and-society' component={Link} />
              <Tab label="Infrastructure & Environment" to ='/infrastructure-and-environment' component={Link} />
              <Tab label='Leadership & Strategy' to ='/leadership-and-strategy' component={Link} />
            </Tabs>)}
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
    </>
  );
} 