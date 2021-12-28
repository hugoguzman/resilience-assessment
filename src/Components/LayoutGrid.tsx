import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { LayoutCards } from './LayoutCards';


export const LayoutGrid = () => {
	return (
		<Container maxWidth='sm'>
			<Grid container spacing={3} direction={'column'} sx={{ paddingTop: 6, paddingBottom: 6}}>
				<Grid item xs={12} sm={6} md={3}>
					<Typography variant='h6' sx={{ textAlign: 'center', fontWeight: 'bold'}}>Input</Typography> 
					<Typography variant='subtitle1' sx={{fontWeight: 'bold'}}>
						Question 1: How are essential resources for a person's basic
						physiological needs provided or accessible? (energy, water, food,
						shelter, waste)
					</Typography>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<LayoutCards />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<LayoutCards />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<LayoutCards />
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<LayoutCards />
				</Grid>
			</Grid>
		</Container>
	);
};
