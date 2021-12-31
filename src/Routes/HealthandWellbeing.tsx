import React from 'react';
import { LayoutGrid } from '../Components/LayoutGrid';
import { Typography } from '@mui/material';
import '../Components/HealthWB.css';

export default function HealthandWellbeing() {
	return (
		<>
			<header className='HealthHead'>
				<Typography variant='h6' sx={{ fontWeight: 'bold'}}>Health and Wellbeing</Typography>{' '}
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
			<LayoutGrid />
		</>
	);
}
