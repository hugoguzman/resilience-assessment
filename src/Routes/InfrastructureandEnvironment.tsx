import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';

export default function InfrastructureandEnvironment() {
	return (
		<>
			<header className='header'>
				<Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'left' }}>
					Infrastructure and Environment
				</Typography>{' '}
				<Typography variant='body2'>
					{' '}
					This dimension relates to place - the quality of infrastructure and
					ecosystems that protects, provide and connect us. The CRI considers
					the robustness of infrastructure and ecosystems that protect us from
					natural hazards. The continuity of critical services, under shock or
					stress situations are also important within this dimension. In
					particular, water supply, power distribution, and solid waste
					management; the transportation systems that enable the flow of goods,
					services, people, and information.
				</Typography>
			</header>
			<Container>
				<Grid
					container
					spacing={3}
					direction={'column'}
					sx={{ paddingTop: 6, paddingBottom: 6 }}
				>
					<Grid item xs={12} sm={6} md={3}>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flex: 1,
								flexDirection: 'column',
								padding: 16,
								justifyContent: 'space-evenly',
								height: 510,
							}}
						>
							<div
								style={{
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									flex: 1,
									padding: 16,
									justifyContent: 'space-evenly',
								}}
							>
								{' '}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda quos praesentium id exercitationem. Repudiandae
								similique labore beatae placeat, eaque voluptas provident
								accusamus delectus quod error, culpa quaerat accusantium
								repellendus repellat?
							</div>

							<div
								style={{
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									flex: 1,
									padding: 16,
									justifyContent: 'space-evenly',
								}}
							>
								{' '}
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Assumenda quos praesentium id exercitationem. Repudiandae
								similique labore beatae placeat, eaque voluptas provident
								accusamus delectus quod error, culpa quaerat accusantium
								repellendus repellat?
							</div>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
				</Grid>
			</Container>
		</>
	);
}
