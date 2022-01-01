import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { ConstantsCard } from './ConstantsCard';
import { ParameterCard } from './ParameterCard';
import { useForm, SubmitHandler } from 'react-hook-form';
// import { DevTool } from "@hookform/devtools";
import { InputProps, TextField, Button, IconButton } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

type FormValues = {
	name: string;
	firstName: string;
	lastName: string;
	// useFormRegisterReturn: any;
	// register: (values: any) => void;
	// inputRef?: React.Ref<any>;
	// register: React.Ref<any>;
};

export const FormTab = () => {
	const [selectedTab, setSelectedTab] = React.useState(0);

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};

	const { register, control, formState, handleSubmit, formState: { errors }, } = useForm<FormValues>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
		shouldUnregister: false,
	});

    console.log('errors', errors);

    const formSubmitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
        console.log('form data is', data);
    };

	console.log(`form isDirty=${formState.isDirty}`);
	console.log(formState.dirtyFields);

	const testRef = React.useRef<InputProps>(null);
	// const inputRef = React.useRef<any>(null)

	return (
		<div>
			<form onSubmit={handleSubmit(formSubmitHandler)}>
				{/* <DevTool control={control} /> */}
				<Tabs value={selectedTab} onChange={handleTabChange}>
					<Tab label='Name' />
					<Tab label='Identifier' />
					<Tab label='A third Tab' />
				</Tabs>
				{selectedTab === 0 && (
					<>
                    <div style={{ display: 'flex', alignItems: 'center', flex: 1, padding: 16, justifyContent: 'space-evenly'}}>
                        <IconButton><HelpIcon></HelpIcon></IconButton>
                        <p style={{display: 'block', width: '100%'}}>this is where the input prompt or question will go.</p>
						<TextField
							id='firstName'
							//   name="firstName"
							label='First Name'
							type='text'
							{...register('firstName', { required: true })}
							//   inputRef={...register('name', { required: true })}
						/>
                        {errors.firstName && <span>This field is required</span>}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', flex: 1, padding: 16}}>
						<TextField
							id='lastName'
							//   name="lastName"
							label='Last Name'
							type='text'
							{...register('lastName', { required: true })}
							//   inputRef={register()}
						/>
                        {errors.lastName && <span>This field is required</span>}
                        <input type='submit'/>
                        </div>
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
					// <TextField
					// 	id='someField'
					// 	name='someField'
					// 	label='some field'
					// 	type='text'
					// 	// inputRef={register()}
					// />
                    <ConstantsCard />
				)}
				{/* <Button>Submit</Button> */}
			</form>
		</div>
	);
};
