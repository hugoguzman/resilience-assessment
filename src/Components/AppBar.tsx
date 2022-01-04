import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavDrawer from './NavDrawer';
import { useLocation } from 'react-router-dom'






export const TopAppBar = () => {
	const location = useLocation();
	const [openDrawer, setOpenDrawer] = useState(true);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [selectedTab, setSelectedTab] = useState(0);
	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};
	
	useEffect(() => {
		let path = location.pathname;
		if (path === '/' && selectedTab !== 0) setSelectedTab(0);
		else if (path === '/health-and-wellbeing' && selectedTab !== 1) setSelectedTab(1);
		else if (path === '/economy-and-society' && selectedTab !== 2) setSelectedTab(2);
		else if (path === '/infrastructure-and-environment' && selectedTab !== 3) setSelectedTab(3);
		else if (path === '/leadership-and-strategy' && selectedTab !== 4) setSelectedTab(4);
	}, [selectedTab])
	
	console.log(isMobile);

	return (
		<>
			<Box flexGrow={1} sx={{ alignContent:'center', display: "flex" }}>
				<AppBar color='transparent' elevation={0} position='static' >
					<Toolbar>
						{isMobile ? (
							<NavDrawer
								openDrawer={openDrawer}
								setOpenDrawer={setOpenDrawer}
							/>
						) : (<Box sx={{margin: 'auto'}}>
							<Tabs variant='fullWidth' centered value={selectedTab} onChange={handleTabChange}>
								<Tab label='Home' to='/' component={Link} />
								<Tab
									label='Health & Wellbeing'
									to='/health-and-wellbeing'
									component={Link}
								/>
								<Tab
									label='Economy & Society'
									to='/economy-and-society'
									component={Link}
								/>
								<Tab
									label='Infrastructure & Environment'
									to='/infrastructure-and-environment'
									component={Link}
								/>
								<Tab
									label='Leadership & Strategy'
									to='/leadership-and-strategy'
									component={Link}
								/>
							</Tabs>
							</Box>
						)}
						{isMobile ? (
							<IconButton onClick={() => setOpenDrawer(true)}>
								<MenuIcon />
							</IconButton>
						) : null}
					</Toolbar>
				</AppBar>
				{/* <Toolbar /> */}
				{/* <Outlet /> */}
			</Box>
		</>
	);
}
