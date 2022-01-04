import { yupResolver } from '@hookform/resolvers/yup';
import HelpIcon from '@mui/icons-material/Help';
import {
	Container,
	Grid,
	IconButton,
	TextField,
	Typography,
	Button,
	ButtonGroup,
} from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CustomModal } from '../Components/CustomModal';

//type definitions for forms ////////////////////

type FormValues = {
	inputA: string; // later on, need to determine best type definitions for error validation etc.
	inputB: string;
	inputC: string;
	inputD: string;
	constantA: number | string;
	constantB: number | string;
	constantC: number | string;
	constantD: number | string;
};

// schema for yup validation ////////////////////

const schema = yup.object().shape({
	inputA: yup.string().required('This field is required.'),
	inputB: yup.string().required('This field is required.'),
	inputC: yup.string().required('This field is required.'),
	inputD: yup.string().required('This field is required.'),
	constantA: yup
		.number()
		.typeError('Must be a number.')
		.required('This field is required.')
		.integer(),
	constantB: yup
		.number()
		.typeError('Must be a number.')
		.required('This field is required.')
		.integer(),
	constantC: yup
		.number()
		.typeError('Must be a number.')
		.required('This field is required.')
		.integer(),
	constantD: yup
		.number()
		.typeError('Must be a number.')
		.required('This field is required.')
		.integer(),
});

//modalReducer programatically determines modal content/actions ////////////////////

const MODAL_A = 'MODAL_A';
const MODAL_B = 'MODAL_B';
const MODAL_C = 'MODAL_C';
const MODAL_D = 'MODAL_D';
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
			case MODAL_C:
			return {
				heading: `Modal 1C`,
				content: `Content for Modal 1C goes here.`,

				show: true,
			};
			case MODAL_D:
			return {
				heading: `Modal 1D`,
				content: `Content for Modal 1D goes here.`,

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

//Functional Component ////////////////////

const HealthandWellbeing: React.FC = () => {
	// consts for tab panels ////////////////////

	const [selectedTab, setSelectedTab] = React.useState(0);
	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};

	// react-hook-forms useForm declarations ////////////////////

	const {
		register,
		formState,
		control,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormValues>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		shouldUnregister: false,
		criteriaMode: 'all',
	});

	console.log('errors', errors);

	// form submit handler defines function to be called on form submit ////////////////////

	const formSubmitHandler: SubmitHandler<FormValues> = (
		data: FormValues,
		event
	) => {
		console.log('form data is', data);
		alert(JSON.stringify(data, null, 2));
		console.log('event', event);
	};

	// submit error message alert

	const onError = () => {
		alert(
			'ERROR: Please verify that all required fields have been entered and there are no errors.'
		);
	};

	console.log(`form isDirty=${formState.isDirty}`);
	console.log(formState.dirtyFields);

	// modal functions and reducer logic ////////////////////

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

	//render ////////////////////

	return (
		<>
			<header className='header'>
				<Typography
					variant='h6'
					sx={{ fontWeight: 'bold', textAlign: 'left' }}
				>
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
			<Container>
				<Grid
					container
					spacing={3}
					direction={'column'}
					sx={{ paddingTop: 2, height:'100%' }}
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
							<Typography
								variant='subtitle1'
								sx={{ textAlign: 'left', fontWeight: 'bold' }}
							>
								1A. Percent Water Supplied Versus Water Demand for One Year
							</Typography>
						</p>
						<div>
							<form onSubmit={handleSubmit(formSubmitHandler, onError)}>
								<Tabs
									sx={{ borderBottom: 1, borderColor: 'divider' }}
									value={selectedTab}
									onChange={handleTabChange}
								>
									<Tab label='Input Parameters' />
									<Tab label='Constants' />
								</Tabs>
								{selectedTab === 0 && ( ///INPUTS /////////////////////////////
									<div style={{
										display: 'flex',
										alignItems: 'center',
										flex: 1,
										flexDirection: 'column',
										padding: 16,
										justifyContent: 'space-evenly',
									}}
										
									>
										<div style={{
												width: '100%',
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
											<div className='textDivs'>
												Area of rainfall collection structures (ft<sup>2</sup>)
											</div>
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
										<div style={{
												width: '100%',
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

											<div className='textDivs'>
												Annual rainfall (ft)
											</div>
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
										<div 
											style={{
												width: '100%',
												display: 'flex',
												alignItems: 'center',
												flex: 1,
												padding: 16,
												justifyContent: 'space-evenly',
											}}
										>
											<IconButton onClick={() => dispatchModalAction(MODAL_C)}>
												<HelpIcon></HelpIcon>
											</IconButton>
											<div className='textDivs'>
												Area of office space (ft<sup>2</sup>)
											</div>
											<Controller
												name='inputC'
												control={control}
												defaultValue=''
												render={({ field }) => (
													<TextField
														{...field}
														label='Input'
														variant='outlined'
														error={!!errors.inputC}
														helperText={
															errors.inputC ? errors.inputC?.message : ''
														}
													/>
												)}
											/>
										</div>
										<div 
											style={{
												width: '100%',
												display: 'flex',
												alignItems: 'center',
												flex: 1,
												padding: 16,
												justifyContent: 'space-evenly',
											}}
										>
											<IconButton onClick={() => dispatchModalAction(MODAL_D)}>
												<HelpIcon></HelpIcon>
											</IconButton>
											<div className='textDivs'>
												Area of commercial space (ft<sup>2</sup>)
											</div>
											<Controller
												name='inputD'
												control={control}
												defaultValue=''
												render={({ field }) => (
													<TextField
														{...field}
														label='Input'
														variant='outlined'
														error={!!errors.inputD}
														helperText={
															errors.inputD ? errors.inputD?.message : ''
														}
													/>
												)}
											/>
										</div>
										<ButtonGroup sx={{ padding: 3 }}>
											<Button type='submit' variant='contained'>
												Submit
											</Button>
											<Button
												type='reset'
												variant='contained'
												onClick={() => reset()}
											>
												{' '}
												Reset
											</Button>
										</ButtonGroup>
									</div>
								)}
								{selectedTab === 1 && ( ///CONSTANTS  /////////////////////////////
									<div
										style={{
											display: 'flex',
											alignItems: 'center',
											flex: 1,
											flexDirection: 'column',
											padding: 16,
											justifyContent: 'space-evenly',
										}}
									>
										<div
											style={{
												width: '100%',
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
											<div className='textDivs'>
												Area of rainfall collection structures (ft<sup>2</sup>)
											</div>
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
												width: '100%',
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

											<div className='textDivs'>
												Area of rainfall collection structures (ft<sup>2</sup>)
											</div>
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
										<div
											style={{
												width: '100%',
												display: 'flex',
												alignItems: 'center',
												flex: 1,
												padding: 16,
												justifyContent: 'space-evenly',
											}}
										>
											<IconButton onClick={() => dispatchModalAction(MODAL_C)}>
												<HelpIcon></HelpIcon>
											</IconButton>
											<div className='textDivs'>
												Area of rainfall collection structures (ft<sup>2</sup>)
											</div>
											<Controller
												name='constantC'
												control={control}
												defaultValue={''}
												render={({ field }) => (
													<TextField
														{...field}
														label='Constant'
														variant='outlined'
														error={!!errors.constantC}
														helperText={
															errors.constantC ? errors.constantC?.message : ''
														}
													/>
												)}
											/>
										</div>
										<div
											style={{
												width: '100%',
												display: 'flex',
												alignItems: 'center',
												flex: 1,
												padding: 16,
												justifyContent: 'space-evenly',
											}}
										>
											<IconButton onClick={() => dispatchModalAction(MODAL_D)}>
												<HelpIcon></HelpIcon>
											</IconButton>
											<div className='textDivs'>
												Area of rainfall collection structures (ft<sup>2</sup>)
											</div>
											<Controller
												name='constantD'
												control={control}
												defaultValue={''}
												render={({ field }) => (
													<TextField
														{...field}
														label='Constant'
														variant='outlined'
														error={!!errors.constantD}
														helperText={
															errors.constantD ? errors.constantD?.message : ''
														}
													/>
												)}
											/>
										</div>

										<ButtonGroup sx={{ padding: 3 }}>
											<Button type='submit' variant='contained'>
												Submit
											</Button>
											<Button
												type='reset'
												variant='contained'
												onClick={() => reset()}
											>
												{' '}
												Reset
											</Button>
										</ButtonGroup>
									</div>
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
