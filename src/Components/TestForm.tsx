import { Button, TextField } from '@mui/material';
import * as React from 'react';
import { Formik, Form } from 'formik';

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
				<Form>
					<div>
						<TextField
							placeholder='first name'
							name='firstName'
							value={values.firstName}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					<div>
						<TextField
							placeholder='last name'
							name='lastName'
							value={values.lastName}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
					<div>
						<TextField
							placeholder='email'
							name='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</div>
                    <Button type='submit'>submit</Button>
					<pre>{JSON.stringify(values, null, 2)}</pre>
				</Form>
			)}
		</Formik>
	);
};
