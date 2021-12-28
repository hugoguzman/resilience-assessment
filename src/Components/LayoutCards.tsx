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
	TextField,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { ParameterCard } from './ParameterCard';
import { ConstantsCard } from './ConstantsCard';

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
			<Box>
				<span style={{ paddingTop: 10 }}>
					<Typography>1A. Section Title</Typography>
				</span>
				<Box>
					{' '}
					<Tabs
						value={value}
						onChange={handleChange}
						textColor='primary'
						indicatorColor='primary'
						aria-label='secondary tabs example'
					>
						<Tab value='one' label='Input Parameters' onClick={() => setTabOpen(!tabOpen)}/>
						<Tab value='two' label='Constants' />
					</Tabs>
				</Box>
				{tabOpen ? <ParameterCard /> : <ConstantsCard />}
			</Box>
		</div>
	);
};
