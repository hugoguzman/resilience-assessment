import React from 'react';
// import '../App.css';
import { TestForm } from '../Components/TestForm';
import '../Components/Home.css';
import { Typography } from '@mui/material';
import { MyTextField } from '../Components/MyTextField';

export default function HealthandWellbeing() {
	// const [values, setValues] = useState(defaultValues);
	// const { name } = values;
	return (
		<>
			<header className='HomeHead'>
				<Typography variant='h5' sx={{ fontWeight: 'bold' }}>
					Welcome to Resilience Design Assessment Tool!
				</Typography>{' '}
				<Typography variant='h6'> Please Log in.</Typography>
			</header>
			<div style={{ display: 'flex', flex: 1 }}>
				<TestForm
					onSubmit={({ email, firstName, lastName }) => {
						console.log(email, firstName, lastName);
					}}
				/>
			</div>
		</>
	);
}
