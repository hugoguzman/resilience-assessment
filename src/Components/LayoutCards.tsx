import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	IconButton,
	Typography,
	Box,
	Tabs,
	Tab,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import TextField from '@mui/material/TextField';

const style = {
	display: 'flex',
	flexDirection: 'row',
} as const;

export const LayoutCards = () => {
	return (
		<div>
			
			<Card elevation={0}>
            <span>
				<Typography>HEADING</Typography>
			</span>
				<Box>
					{' '}
					<Tabs textColor='secondary' indicatorColor='secondary'>
						<Tab label='Input Parameters' /> <Tab label='Constants' />
					</Tabs>
				</Box>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField variant='outlined' size='small' />}
					title='Title'
					subheader='subHeader'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField variant='outlined' size='small' />}
					title='Title'
					subheader='subHeader'
				/>
				<CardContent>
					<Typography
						variant='body2'
						color='textSecondary'
						sx={{ position: 'relative' }}
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
						voluptatibus aut dolor nam magnam eaque ad deserunt culpa. Inventore
						quisquam qui unde nihil iste eius ratione blanditiis! At, asperiores
						sint.
					</Typography>
				</CardContent>
				{/* <CardContent >
                <TextField sx={{width:'100%'}} label='Outlined secondary' color='primary' focused />
                </CardContent> */}
			</Card>
		</div>
	);
};
