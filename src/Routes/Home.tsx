import React from 'react';

import '../Components/Home.css';
import { Typography } from '@mui/material';

export default function HealthandWellbeing() {

	return (
		<>
			<header className='HomeHead'>
				<Typography variant='h5' sx={{ fontWeight: 'bold' }}>
					Welcome to Resilience Design Assessment Tool!
				</Typography>{' '}
				<Typography variant='h6'> Please Log in.</Typography>
			</header>
			<div style={{ display: 'flex', flex: 1 }}>
				
			</div>
		</>
	);
}
