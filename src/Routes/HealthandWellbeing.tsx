import { yupResolver } from '@hookform/resolvers/yup';
import HelpIcon from '@mui/icons-material/Help';
import { Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import '../Components/HealthWB.css';


type FormValues = {
	firstName: string;
	lastName: string;
	constantA: number | string;
	constantB: number | string;
};

const schema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	constantA: yup.number().required().positive().integer(),
	constantB: yup.number().required().positive().integer(),
});


export default function HealthandWellbeing() {
	const [selectedTab, setSelectedTab] = React.useState(0);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};

	const {
		register,
		formState,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		shouldUnregister: false,
	});

	console.log('errors', errors);

	const formSubmitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
		console.log('form data is', data);
		alert(JSON.stringify(data, null, 2));
	};

	console.log(`form isDirty=${formState.isDirty}`);
	console.log(formState.dirtyFields);

	return (
		<>
			<header className='HealthHead'>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Health and Wellbeing
				</Typography>{' '}
				<Typography variant='body2'>
					{' '}
					This dimension relates to people - the health and well-being of
					everyone living and working in the city. This dimension considers the
					extent to which the city enables everyone to meet their basic needs
					(food, water, and shelter), particularly in times of crisis. it
					considers how well the city supports diverse livelihood oppurtunities,
					including access to business investment and social wellfare. Finally,
					it considers if a city is able to safeguard the health of its
					population through its normal and emergency healthcare provisions.
				</Typography>
			</header>
			<Container sx={{ display: 'flex', flexDirection: 'column' }}>
				{/* <FormControl> */}
				<Grid
					container
					spacing={3}
					direction={'column'}
					sx={{ paddingTop: 6, paddingBottom: 6, display: 'flex', flex: 1 }}
				>
					<Grid item xs={12} sm={6} md={3}>
						<Typography
							variant='subtitle1'
							sx={{ textAlign: 'center', fontWeight: 'bold' }}
						>
							Input
						</Typography>
						<Typography variant='body1'>
							Question 1: How are essential resources for a person's basic
							physiological needs provided or accessible? (energy, water, food,
							shelter, waste)
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<p>
							<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
								1A. Section Title
							</Typography>
						</p>
						<div>
			<form onSubmit={handleSubmit(formSubmitHandler)}>
				<Tabs
					sx={{ borderBottom: 1, borderColor: 'divider' }}
					value={selectedTab}
					onChange={handleTabChange}
				>
					<Tab label='Input Parameters' />
					<Tab label='Constants' />
					{/* <Tab label='A third Tab' /> */}
				</Tabs>
				{selectedTab === 0 && (
					<>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flex: 1,
								padding: 16,
								justifyContent: 'space-evenly',
							}}
						>
							<IconButton>
								<HelpIcon></HelpIcon>
							</IconButton>
							<Typography sx={{ display: 'block', width: '100%' }}>
								This is where words go
							</Typography>
							<Controller
								name='firstName'
								control={control}
								defaultValue=''
								render={({ field }) => (
									<TextField
										{...field}
										label='First Name'
										variant='outlined'
										error={!!errors.firstName}
										helperText={
											errors.firstName ? errors.firstName?.message : ''
										}
									/>
								)}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flex: 1,
								padding: 16,
								justifyContent: 'space-evenly',
							}}
						>
							<IconButton>
								<HelpIcon></HelpIcon>
							</IconButton>

							<Typography sx={{ display: 'block', width: '100%' }}>
								This is where words go
							</Typography>
							<Controller
								name='lastName'
								control={control}
								defaultValue=''
								render={({ field }) => (
									<TextField
										{...field}
										label='Last Name'
										variant='outlined'
										error={!!errors.lastName}
										helperText={errors.lastName ? errors.lastName?.message : ''}
									/>
								)}
							/>
						</div>
						<input type='submit' />
					</>
				)}
				{selectedTab === 1 && (
					<>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flex: 1,
								padding: 16,
								justifyContent: 'space-evenly',
							}}
						>
							<IconButton>
								<HelpIcon></HelpIcon>
							</IconButton>
							<Typography sx={{ display: 'block', width: '100%' }}>
								This is where words go
							</Typography>
							<Controller
								name='constantA'
								control={control}
								defaultValue={''}
								render={({ field }) => (
									<TextField
										{...field}
										label='Constant'
										variant='outlined'
										error={!!errors.constantA}
										helperText={
											errors.constantA ? errors.constantA?.message : ''
										}
									/>
								)}
							/>
						</div>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flex: 1,
								padding: 16,
								justifyContent: 'space-evenly',
							}}
						>
							<IconButton>
								<HelpIcon></HelpIcon>
							</IconButton>

							<Typography sx={{ display: 'block', width: '100%' }}>
								This is where words go
							</Typography>
							<Controller
								name='constantB'
								control={control}
								defaultValue={''}
								render={({ field }) => (
									<TextField
										{...field}
										label='Constant'
										variant='outlined'
										error={!!errors.constantB}
										helperText={
											errors.constantB ? errors.constantB?.message : ''
										}
									/>
								)}
							/>
						</div>
						<input type='submit' />
					</>
				)}
				{/* {selectedTab === 2 && (
					<TextField
						id='someField'
						name='someField'
						label='some field'
						type='text'
						// inputRef={register()}
					/>
				)} */}
				{/* <Button>Submit</Button> */}
			</form>
		</div>			
						{/* <FormTab /> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
				
				</Grid>
				{/* </FormControl> */}
			</Container>
		</>
	);
}
