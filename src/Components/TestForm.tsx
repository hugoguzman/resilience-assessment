import { Button, TextField, Typography, IconButton } from '@mui/material';
import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { MyForm } from './myForm';
import HelpIcon from '@mui/icons-material/Help';
import { MyTextField } from './MyTextField'


interface Values {
	firstName: string;
	lastName: string;
	email: string;
}

interface Props {
	onSubmit: (values: Values) => void;
}

export const TestForm: React.FC<Props> = ({ onSubmit }) => {
	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			onSubmit={(values) => {
				onSubmit(values);
			}}
		>
			{({ values, handleChange, handleBlur }) => (
				<Form style={{ minWidth: '100%' }}>
				{/* <div
				style={{width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-evenly', flex: 1}}
				> */}
					<div
						style={{
							display: 'flex',
							flex: 1,
							justifyContent: 'space-evenly',
							minWidth: '100%',
							margin: 'auto',
							padding: 6,
							borderBottom: '1px solid grey'
						}}
					>
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
						
						<p style={{display: 'block', width: '16rem'}}><Typography>First Name</Typography></p>
						
						{/* <Field name='firstName' placeholder='first name' component={MyForm} /> */}
					</div>
					<div
						style={{
							display: 'flex',
							flex: 1,
							justifyContent: 'space-evenly',
							minWidth: '100%',
							margin: 'auto',
							padding: 6,
							borderBottom: '1px solid grey'
						}}
					>
						
						<p style={{display: 'block', width: '16rem'}}><Typography>Last Name</Typography></p>
						{/* <Field name='lastName' placeholder='last name' component={MyForm}/> */}
					</div>
					<div
						style={{
							display: 'flex',
							flex: 1,
							justifyContent: 'space-evenly',
							minWidth: '100%',
							margin: 'auto',
							padding: 6,
							borderBottom: '1px solid grey'
						}}
					>
						<p style={{display: 'block', width: '16rem'}}><Typography>Email Address</Typography></p>
						{/* <Field name='email' placeholder='email' component={MyForm}/> */}
					</div>
					{/* <Button sx={{margin: 3}}  variant='outlined' type='submit'>submit</Button> */}
					
				 </Form>
			 )}
		</Formik>
		
	);
};
