import { yupResolver } from '@hookform/resolvers/yup';
import HelpIcon from '@mui/icons-material/Help';
import {
	Container,
	Grid,
	IconButton,
	TextField,
	Typography,
	Button
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CustomModal } from '../Components/CustomModal';
import '../Components/HealthWB.css';

type FormValues = {
	inputA: string; // later on, need to determine best type definitions for error validation etc.
	inputB: string;
	constantA: number | string;
	constantB: number | string;
};

const schema = yup.object().shape({
	inputA: yup.string().required(),
	inputB: yup.string().required(),
	constantA: yup.number().required().positive().integer(),
	constantB: yup.number().required().positive().integer(),
});

const MODAL_A = 'MODAL_A';
const MODAL_B = 'MODAL_B';
const CLOSE = 'CLOSE';

const modalReducer = (state: any, action: any) => {
	switch (action.type) {
		case MODAL_A:
			return {
				heading: `Modal 1A`,
				content: `Content for Modal 1A goes here.`,

				show: true,
			};
		case MODAL_B:
			return {
				heading: `Modal 1B`,
				content: `Content for Modal 1B goes here.`,

				show: true,
			};
		case CLOSE:
			return {
				heading: '',
				content: '',

				show: false,
			};
	}
};

const HealthandWellbeing: React.FC = () => {
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

	const [modalState, modalDispatch] = React.useReducer(modalReducer, {
		heading: '',
		content: '',
		show: false,
	});

	const dispatchModalAction = (action: string) => {
		modalDispatch({
			type: action,
		});
	};

	const closeModalHandler = () => {
		modalDispatch({
			type: CLOSE,
		});
	};

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
			<Container sx={{ display: 'flex', flexDirection: 'column'}}>
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
											<IconButton onClick={() => dispatchModalAction(MODAL_A)}>
												<HelpIcon></HelpIcon>
											</IconButton>
											<Typography sx={{ display: 'block', width: '100%' }}>
												Area of rainfall collection structures (ft<sup>2</sup>)
											</Typography>
											<Controller
												name='inputA'
												control={control}
												defaultValue=''
												render={({ field }) => (
													<TextField
														{...field}
														label='Input'
														variant='outlined'
														error={!!errors.inputA}
														helperText={
															errors.inputA ? errors.inputA?.message : ''
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
											<IconButton onClick={() => dispatchModalAction(MODAL_B)}>
												<HelpIcon></HelpIcon>
											</IconButton>

											<Typography sx={{ display: 'block', width: '100%' }}>
												Actual rainfall (ft)
											</Typography>
											<Controller
												name='inputB'
												control={control}
												defaultValue=''
												render={({ field }) => (
													<TextField
														{...field}
														label='Input'
														variant='outlined'
														error={!!errors.inputB}
														helperText={
															errors.inputB ? errors.inputB?.message : ''
														}
													/>
												)}
											/>
										</div>
										{/* <input type='submit' /> */}
										<Button type='submit' variant='contained'>Submit</Button>
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
										<Button type='submit' variant='contained'>Submit</Button>
									</>
								)}
							</form>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
					<Grid item xs={12} sm={6} md={3}></Grid>
				</Grid>
			</Container>
			<CustomModal
				show={modalState?.show}
				close={closeModalHandler}
				heading={modalState?.heading}
				body={modalState?.content}
			/>
		</>
	);
};

export default HealthandWellbeing;
