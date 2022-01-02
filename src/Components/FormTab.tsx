import { yupResolver } from '@hookform/resolvers/yup';
import HelpIcon from '@mui/icons-material/Help';
import { IconButton, TextField, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

type FormValues = {
	firstName: string;
	lastName: string;
	constantA: number;
	constantB: number;
};

const schema = yup.object().shape({
	firstName: yup.string().required(),
	lastName: yup.string().required(),
	constantA: yup.number().required().positive().integer(),
	constantB: yup.number().required().positive().integer(),
});

export const FormTab = () => {
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
								defaultValue={undefined}
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
								defaultValue={undefined}
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
	);
};
