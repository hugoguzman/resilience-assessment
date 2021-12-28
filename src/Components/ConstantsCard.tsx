import React from 'react'
import { Box, Card, CardHeader,TextField, IconButton, Typography } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';


export const ConstantsCard = () => {
    return (
			<Card>
				<span style={{ paddingTop: 10}}>
					<Typography sx={{fontWeight: 'bold'}}>1A. Section Title</Typography>
				</span>
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
    )
}
