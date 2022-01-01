import { Button, Container, Grid, Typography } from '@mui/material';
import '../Components/HealthWB.css';
import LayoutCards from '../Components/LayoutCards'
import { FormControl } from '@mui/material';
import { FormTab } from '../Components/FormTab';


export default function HealthandWellbeing() {
	return (
		<>
			<header className='HealthHead'>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Health and Wellbeing
				</Typography>{' '}
				<Typography variant='body1'>
					{' '}
					This dimension relates to people - the health and well-being of
					everyone living and working in the city. This dimension considers the
					extent to which the city enables everyone to meet their basic needs
					(food, water, and shelter), particularly in times of crisis. it
					considers how well the city supports diverse livelihood oppurtunities,
					including access to business investment and social wellfare. Finally,
					it considers if a city is able to safeguard the health of its
					population through its normal and emergency healthcare provisions.
				</Typography>
			</header>
			<Container
				sx={{ display: 'flex', flexDirection: 'column' }}
			>
			<FormControl>
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
							Question 1: How are essential resources for a person's basic
							physiological needs provided or accessible? (energy, water, food,
							shelter, waste)
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<p>
							<Typography>1A. Section Title</Typography>
						</p>
						{/* <LayoutCards /> */}
						<FormTab />
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						{/* <LayoutCards /> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						{/* <LayoutCards /> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<button type='submit'>Submit</button>
					</Grid>
				</Grid>
				</FormControl>
			</Container>
		</>
	);
}
