import { TextField } from '@mui/material';
import { FieldProps } from 'formik';
import * as React from 'react';

interface Props extends FieldProps {
    placeholder: string;
}

export const MyForm: React.FC<Props> = ({ placeholder, field }) => {
	return (
		<TextField
			placeholder={placeholder} {...field} 
		/>
	);
};
