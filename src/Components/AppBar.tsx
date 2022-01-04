import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import NavDrawer from './NavDrawer';

export default function TopAppBar() {
	const [openDrawer, setOpenDrawer] = useState(true);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const [selectedTab, setSelectedTab] = useState(0);
	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};
	
	
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
