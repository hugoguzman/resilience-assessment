import { yupResolver } from '@hookform/resolvers/yup';
import {
	Button,
	ButtonGroup,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import * as React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { CustomModal } from '../Components/CustomModal';
import HWBForms from '../Components/HWBForms';
import HWBForm2 from '../Components/HWBForm2';

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
	input1: string;
	input2: string;
	input3: string;
	input4: string;
	constant1: number | string;
	constant2: number | string;
	constant3: number | string;
	constant4: number | string;
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
	input1: yup.string().required('This field is required.'),
	input2: yup.string().required('This field is required.'),
	input3: yup.string().required('This field is required.'),
	input4: yup.string().required('This field is required.'),
	constant1: yup
		.number()
		.typeError('Must be a number.')
		.required('This field is required.')
		.integer(),
	constant2: yup
		.number()
		.typeError('Must be a number.')
		.required('This field is required.')
		.integer(),
	constant3: yup
		.number()
		.typeError('Must be a number.')
		.required('This field is required.')
		.integer(),
	constant4: yup
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
	const methods = useForm<FormValues>({
		resolver: yupResolver(schema),
		mode: 'onBlur',
		reValidateMode: 'onChange',
		shouldUnregister: false,
		criteriaMode: 'all',
	});

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

	console.log(`form isDirty=${methods.formState.isDirty}`);
	console.log(methods.formState.dirtyFields);

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
				<Typography variant='h6' sx={{ fontWeight: 'bold', textAlign: 'left' }}>
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
					sx={{ paddingTop: 2, height: '100%' }}
				>
					<Grid item xs={12} sm={6} md={3}>
						<Typography
							variant='subtitle1'
							sx={{ textAlign: 'center', fontWeight: 'bold' }}
						>
							<u>Input</u>
						</Typography>
						<Typography variant='subtitle1'>
							<u><b>Question 1:</b></u> How are essential resources for a person's basic
							physiological needs provided or accessible? (energy, water, food,
							shelter, waste)
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Typography variant='subtitle1' sx={{ textAlign: 'left' }}>
							<b>1A.</b> Percent Water Supplied Versus Water Demand for One Year
						</Typography>

						<div>
							<FormProvider {...methods}>
								<form
									onSubmit={methods.handleSubmit(formSubmitHandler, onError)}
								>
									<HWBForms
										MODAL_A={MODAL_A}
										MODAL_B={MODAL_B}
										MODAL_C={MODAL_C}
										MODAL_D={MODAL_D}
										dispatchModalAction={dispatchModalAction}
									/>
									<Typography variant='subtitle1' sx={{ textAlign: 'left' }}>
										<b>1B.</b> Food Security
									</Typography>
									<HWBForm2
										MODAL_A={MODAL_A}
										MODAL_B={MODAL_B}
										MODAL_C={MODAL_C}
										MODAL_D={MODAL_D}
										dispatchModalAction={dispatchModalAction}
									/>
									<div className='innerGridDiv'>
										<ButtonGroup sx={{ padding: 3 }}>
											<Button type='submit' variant='contained'>
												Submit
											</Button>
											<Button
												type='reset'
												variant='contained'
												onClick={() => methods.reset()}
											>
												{' '}
												Reset
											</Button>
										</ButtonGroup>
									</div>
								</form>
							</FormProvider>
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
