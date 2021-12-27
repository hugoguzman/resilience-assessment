import React from 'react';
import { Container, Grid, Card } from '@mui/material';
import { Paper } from '@mui/material';
import { LayoutCards } from './LayoutCards';

export const LayoutGrid = () => {
	return (
		<Container maxWidth='sm'>
			<Grid container spacing={6} direction={'column'} sx={{ paddingTop: 6}}>
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
