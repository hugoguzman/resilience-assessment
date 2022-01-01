import { useState } from 'react';

export const useForm = (callback: any, initialState = {}) => {
	const [values, setValues] = useState(initialState);

	// onChange
	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values)
	};

	// onSubmit
	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		await callback(); // triggering the callback
        console.log(values)
	};

	return {
		onChange,
		onSubmit,
		values,
	};
};
