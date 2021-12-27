import React from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	IconButton,
	Typography,
	Box,
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
			<Card elevation={3}>
				<CardHeader
					action={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					title='Title'
					subheader='subHeader'
				/>
                <Box sx={style}>
				<CardContent >	
						
					<Typography variant="body2" color="textSecondary" sx={{position: 'relative'}}>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus aut dolor nam magnam eaque ad deserunt culpa. Inventore quisquam qui unde nihil iste eius ratione blanditiis! At, asperiores sint.
                 </Typography>
				</CardContent>
                <CardContent >
                <TextField sx={{width:'100%'}} label='Outlined secondary' color='primary' focused />
                </CardContent>
                </Box>
			</Card>
		</div>
	);
};
