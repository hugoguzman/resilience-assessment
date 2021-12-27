import { useState } from 'react';
import {
	Card,
	CardHeader,
	CardContent,
	IconButton,
	Typography,
	Box,
	Tabs,
	Tab,
    TextField
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const style = {
	display: 'flex',
	flexDirection: 'row',
} as const;

export const LayoutCards = () => {
	const [tabOpen, setTabOpen] = useState(true);

    const [value, setValue] = useState('one');
    
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
	return (
		<div>
			<Card elevation={0}>
				<span style={{ paddingTop: 10}}>
					<Typography>1A. Section Title</Typography>
				</span>
				<Box>
					{' '}
					<Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="secondary tabs example"
                        >
                        <Tab value="one" label="Input Parameters" />
                        <Tab value="two" label="Constants" />
					</Tabs>
				</Box>
				{tabOpen ? (
				<Box
				//  sx={{visibility: 'hidden'}} ** use this prop to toggle card content display using button tab **
				 >
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Parameter'
				/>
				<CardHeader 
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Parameter'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Parameter'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Parameter'
				/>
				</Box>
				) : (
					<Box
				//  sx={{visibility: 'hidden'}} ** use this prop to toggle card content display using button tab **
				 >
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Constant'
				/>
				<CardHeader 
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Constant'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Constant'
				/>
				<CardHeader
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={<TextField sx={{margin: 2, width: '50%'}} variant='outlined' size='small' />}
					title='Constant'
				/>
				</Box>
				)}
				{/* <CardContent>
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
				</CardContent> */}
				{/* <CardContent >
                <TextField sx={{width:'100%'}} label='Outlined secondary' color='primary' focused />
                </CardContent> */}
			</Card>
		</div>
	);
};
