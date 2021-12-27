import React from 'react';
import { Container, Grid, Card } from '@mui/material';
import { Paper } from '@mui/material';
import { LayoutCards } from './LayoutCards';

export const Layout = () => {
	return (
		<Container>
			<Grid container spacing={3}>
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
