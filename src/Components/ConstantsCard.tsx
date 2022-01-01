import React, { useState } from 'react';
import { useForm } from '../hooks/useForm';
import {
	Box,
	Card,
	CardHeader,
	TextField,
	IconButton,
	Typography,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

export const ConstantsCard = () => {
	const intitalState = {
		ConstA: 0,
		ConstB: 0,
		ConstC: 0,
		ConstD: 0,
	};

	const { onChange, onSubmit, values } = useForm(
		loginUserCallback,
		intitalState
	);

	//submit function that executes on form submission
	async function loginUserCallback() {
		//send 'values' to database
	}

	return (
		<Card elevation={0}>
			<form onSubmit={onSubmit}>
				{/* <span style={{ paddingTop: 10}}>
					<Typography sx={{fontWeight: 'bold'}}>1A. Section Title</Typography>
				</span> */}
				<CardHeader
					sx={{ display: 'flex' }}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<input
							style={{ width: '75%' }}
							name='ConstA'
							id='ConstA'
							type='number'
							placeholder=''
							onChange={onChange}
							required
						></input>

						// <TextField
						// 	sx={{ margin: 1, width: '50%' }}
						// 	variant='outlined'
						// 	size='small'
						// />
					}
					title='CONSTANTS'
				/>
				<CardHeader
					sx={{ display: 'flex' }}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<input
							style={{ width: '75%' }}
							name='ConstB'
							id='ConstB'
							type='number'
							placeholder=''
							onChange={onChange}
							required
						></input>
					}
					title='CONSTANTS'
				/>
				<CardHeader
					sx={{ display: 'flex' }}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<input
							style={{ width: '75%' }}
							name='ConstC'
							id='ConstC'
							type='number'
							placeholder=''
							onChange={onChange}
							required
						></input>
					}
					title='CONSTANTS'
				/>
				<CardHeader
					sx={{ display: 'flex' }}
					avatar={
						<IconButton onClick={() => console.log('open help modal')}>
							<HelpIcon />
						</IconButton>
					}
					action={
						<input
							style={{ width: '75%' }}
							name='ConstD'
							id='ConstD'
							type='number'
							placeholder=''
							onChange={onChange}
							required
						></input>
					}
					title='CONSTANTS'
				/>
				
			</form>
		</Card>
	);
};
