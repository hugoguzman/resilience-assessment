import React from 'react';
import { Box, Card, CardHeader,TextField, IconButton, } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';


export const ParameterCard = () => {
	return (
		<Box
		//  sx={{visibility: 'hidden'}} ** use this prop to toggle card content display using button tab **
		>
			<Card>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 2, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='Parameter'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 2, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='Parameter'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 2, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='Parameter'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<TextField
							sx={{ margin: 2, width: '50%' }}
							variant='outlined'
							size='small'
						/>
					}
					title='Parameter'
				/>
			</Card>
		</Box>
	);
};
