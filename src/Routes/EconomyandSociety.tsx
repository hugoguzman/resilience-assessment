import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

export const EconomyandSociety = () => {
	return (
		<>
			<header className='header'><Typography
					variant='h6'
					sx={{ fontWeight: 'bold', textAlign: 'left' }}
				>
					Economy and Society
				</Typography>{' '}
				<Typography variant='body1'>
					{' '}
					This dimension relates to Economy and Society.
				</Typography></header>
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
                                height: 510
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
};
