import '../App.css';
import { Button, Container, Grid, Typography } from '@mui/material';
import '../Components/HealthWB.css';

export default function LeadershipandStrategy() {
	return (
		<>
			<header className='HealthHead'>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Leadership and Strategy
				</Typography>{' '}
				<Typography variant='body1'>
					{' '}
					This dimension relates to leadership and strategy.
				</Typography>
			</header>
			<Container sx={{ display: 'flex', flexDirection: 'column' }}>
				<Grid
					container
					spacing={3}
					direction={'column'}
					sx={{ paddingTop: 6, paddingBottom: 6, display: 'flex', flex: 1 }}
				>
					<Grid item xs={12} sm={6} md={3}>
						<Typography
							variant='h6'
							sx={{ textAlign: 'center', fontWeight: 'bold' }}
						>
							Input
						</Typography>
						<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
							tenetur labore reiciendis vel officiis, nemo non pariatur dicta
							iste aliquam corporis dignissimos doloribus, molestiae numquam
							modi ut saepe officia beatae!
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<p>
							<Typography>1A. Section Title</Typography>
						</p>

						
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
					
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
					
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
					
					</Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
				</Grid>
			</Container>
		</>
	);
}
