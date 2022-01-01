import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { ConstantsCard } from './ConstantsCard';
import { ParameterCard } from './ParameterCard';
import { useForm } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools";
import { InputProps, TextField, Button } from '@mui/material';

type FormValues = {
	name: string;
	firstName: string;
	lastName: string;
	// useFormRegisterReturn: any;
	// register: (values: any) => void;
	inputRef?: React.Ref<any>;
	register: React.Ref<any>;
};

export const FormTab = () => {
	const [selectedTab, setSelectedTab] = React.useState(0);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};

	const { register, control, formState } = useForm<FormValues>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		shouldUnregister: false,
	});

	console.log(`form isDirty=${formState.isDirty}`);
	console.log(formState.dirtyFields);

	const testRef = React.useRef<InputProps>(null);
	// const inputRef = React.useRef<any>(null)

	return (
		<div>
			<form>
				{/* <DevTool control={control} /> */}
				<Tabs value={selectedTab} onChange={handleTabChange}>
					<Tab label='Name' />
					<Tab label='Identifier' />
					<Tab label='A third Tab' />
				</Tabs>
				{selectedTab === 0 && (
					<>
						<TextField
							id='firstName'
							//   name="firstName"
							label='First Name'
							type='text'
							{...register('firstName')}
							//   inputRef={...register('name', { required: true })}
						/>
						<TextField
							id='lastName'
							//   name="lastName"
							label='Last Name'
							type='text'
							{...register('lastName')}
							//   inputRef={register()}
						/>
					</>
				)}
				{selectedTab === 1 && (
					<TextField
						id='ssn'
						name='ssn'
						label='SSN'
						type='text'
						// inputRef={register()}
					/>
				)}
				{selectedTab === 2 && (
					<TextField
						id='someField'
						name='someField'
						label='some field'
						type='text'
						// inputRef={register()}
					/>
				)}
				{/* <Button>Submit</Button> */}
			</form>
		</div>
	);
};
