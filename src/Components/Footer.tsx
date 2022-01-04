
import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: grey[400],
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
			<Box flexGrow={1} sx={{backgroundColor: 'blue'}}>
				<AppBar position="fixed" color='primary' sx={{ top: 'auto', bottom: 0}}>
					<Toolbar>
						<Typography> ©FIU 2021-2022</Typography>
					</Toolbar>
				</AppBar>
				{/* <Outlet /> */}
			</Box>
            </ThemeProvider>
		</>
	);
}
