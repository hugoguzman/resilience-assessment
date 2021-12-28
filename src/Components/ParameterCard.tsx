import React from 'react';
import { Card, CardHeader,TextField, IconButton, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';


export const ParameterCard = () => {
	return (
			<Card>
				<span style={{ paddingTop: 10}}>
					<Typography sx={{fontWeight: 'bold'}}>1A. Section Title</Typography>
				</span>
				<CardHeader
					sx={{display: 'flex'}}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 1, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='PARAMETERS'
				/>
				<CardHeader
					sx={{display: 'flex'}}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 1, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='PARAMETERS'
				/>
				<CardHeader
					sx={{display: 'flex'}}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 1, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='PARAMETERS'
				/>
				<CardHeader
					sx={{display: 'flex'}}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 1, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='PARAMETERS'
				/>
			</Card>
	);
};
