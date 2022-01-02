import { yupResolver } from '@hookform/resolvers/yup';
import { TextField, Typography } from '@mui/material';
import * as React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import '../Components/Home.css';

type FormValues = {
	email: string;
	password: string;
};

const schema = yup.object().shape({
	email: yup.string().email(),
	password: yup.string().min(4).max(20).required(),
});

const Home: React.FC = () => {
	const {
		register,
		control,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
	});
	const onSubmit: SubmitHandler<FormValues> = (data) =>
		console.log('data submitted:', data);

	console.log(watch('email'));
	console.log('errors are', errors);

	return (
		<>
			<header className='HomeHead'>
				<Typography variant='h5' sx={{ fontWeight: 'bold' }}>
					Welcome to Resilience Design Assessment Tool!
				</Typography>{' '}
				<Typography variant='h6'> Please Log in.</Typography>
			</header>
			<div style={{ display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'column', paddingTop: 8 }}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<br />
					<Controller
						name='email'
						control={control}
						defaultValue='example@fiu.edu'
						render={({ field }) => (
							<TextField
								{...field}
								label='Email'
								variant='outlined'
								error={!!errors.email}
								helperText={errors.email ? errors.email?.message : ''}
								fullWidth
								margin='dense'
							/>
						)}
					/>
					<br />
					<Controller
						name='password'
						control={control}
						defaultValue=''
						render={({ field }) => (
							<TextField
								{...field}
								type='password'
								label='Password'
								variant='outlined'
								error={!!errors.password}
								helperText={errors.password ? errors.password?.message : ''}
								fullWidth
								margin='dense'
							/>
						)}
					/>
					<br />
					<br />
					<input type='submit' />
					
					<br />
					<br />
				</form>
			</div>
		</>
	);
};

export default Home;