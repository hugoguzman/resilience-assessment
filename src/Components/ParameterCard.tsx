import React from 'react';
import {
	Card,
	CardHeader,
	TextField,
	IconButton,
	Typography,
	Button,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import { Formik, Form, Field } from 'formik';
import { MyForm } from './myForm';

interface Values {
	inputParam: string | number;
	inputParam1: string | number;
	inputParam2: string | number;
	inputParam3: string | number;
}

interface Props {
	onSubmit: (values: Values) => void;
}

export const ParameterCard: React.FC<Props> = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={{
				inputParam: '',
				inputParam1: '',
				inputParam2: '',
				inputParam3: '',
			}}
			onSubmit={(values) => {
				onSubmit(values);
			}}
		>
			{({ values, handleChange, handleBlur }) => (
				<Form>
					<Card elevation={0}>
						<span style={{ paddingTop: 0 }}>
							<Typography sx={{ fontWeight: 'bold' }}>
								1A. Section Title
							</Typography>
						</span>
						<CardHeader
							avatar={
								<IconButton onClick={() => console.log('open help modal')}>
									<HelpIcon />
								</IconButton>
							}
							action={
								<Field name='inputParam' placeholder='' component={MyForm} />
							}
							title='PARAMETERS'
						/>
						<CardHeader
							avatar={
								<IconButton onClick={() => console.log('open help modal')}>
									<HelpIcon />
								</IconButton>
							}
							action={
								// <TextField
								// 	sx={{ margin: 1, width: '50%' }}
								// 	variant='outlined'
								// 	size='small'
								// />
								<Field name='inputParam1' placeholder='' component={MyForm} />
							}
							title='PARAMETERS'
						/>
						<CardHeader
							avatar={
								<IconButton onClick={() => console.log('open help modal')}>
									<HelpIcon />
								</IconButton>
							}
							action={
								// <TextField
								// 	sx={{ margin: 1, width: '50%' }}
								// 	variant='outlined'
								// 	size='small'
								// />
								<Field name='inputParam2' placeholder='' component={MyForm} />
							}
							title='PARAMETERS' //*questions go here
						/>
						<CardHeader
							avatar={
								<IconButton onClick={() => console.log('open help modal')}>
									<HelpIcon />
								</IconButton>
							}
							action={
								// <TextField
								// 	sx={{ margin: 1, width: '50%' }}
								// 	variant='outlined'
								// 	size='small'
								// />
								<Field name='inputParam3' placeholder='' component={MyForm} />
							}
							title='PARAMETERS'
						/>
						<Button type='submit'>Submit</Button>
					</Card>
				</Form>
			)}
		</Formik>
	);
};
