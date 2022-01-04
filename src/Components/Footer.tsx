import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const theme = createTheme({
	palette: {
		primary: {
			main: '#e0e0e0',
		},
		secondary: {
			// This is green.A700 as hex.
			main: '#11cb5f',
		},
	},
});

export default function TopAppBar() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Box flexGrow={1} sx={{ backgroundColor: 'blue' }}>
					<AppBar
						position='fixed'
						color='primary'
						sx={{ top: 'auto', bottom: 0 }}
					>
						<Toolbar>
							<Typography>
								Resilience Design Assessment Tool © FIU 2021-2022
							</Typography>
						</Toolbar>
					</AppBar>
					{/* <Outlet /> */}
				</Box>
			</ThemeProvider>
		</>
	);
}
