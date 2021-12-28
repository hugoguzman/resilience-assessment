import React from 'react'
import { Box, Card, CardHeader,TextField, IconButton, } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';


export const ConstantsCard = () => {
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
				title='CONSTANTS'
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
					title='CONSTANTS'
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
					title='CONSTANTS'
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
					title='CONSTANTS'
				/>
			</Card>
		</Box>
    )
}
