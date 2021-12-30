import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { Formik, Form, Field } from 'formik';
import { MyForm } from './myForm';
import { Padding } from '@mui/icons-material';

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
					<div
						style={{
							display: 'flex',
							flex: 1,
							justifyContent: 'space-evenly',
							minWidth: '100%',
							margin: 'auto',
							padding: 6
						}}
					>
						<Button>click</Button>
						<p style={{display: 'block', width: '16rem'}}>hello, is there anybody in there?</p>
						<Field name='firstName' placeholder='first name' component={MyForm} />
					</div>
					<div
						style={{
							display: 'flex',
							flex: 1,
							justifyContent: 'space-evenly',
							minWidth: '100%',
							margin: 'auto',
							padding: 6
						}}
					>
						<Button>click</Button>
						<p style={{display: 'block', width: '16rem'}}>hello, is there anybody in there? hello, is there anybody in there?</p>
						<Field name='lastName' placeholder='last name' component={MyForm}/>
					</div>
					<div
						style={{
							display: 'flex',
							flex: 1,
							justifyContent: 'space-evenly',
							minWidth: '100%',
							margin: 'auto',
							padding: 6
						}}
					>
						<Button>click</Button>
						<p style={{display: 'block', width: '16rem'}}>hello, is there anybody in there?</p>
						<Field name='email' placeholder='email' component={MyForm}/>
					</div>
					<Button type='submit'>submit</Button>
					<pre>{JSON.stringify(values, null, 2)}</pre>
				</Form>
			)}
		</Formik>
	);
};
