import HelpIcon from '@mui/icons-material/Help';
import { IconButton, TextField } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Props {
	MODAL_A: string;
	MODAL_B: string;
	MODAL_C: string;
	MODAL_D: string;
	dispatchModalAction: any;
}

const HWBForms: React.FC<Props> = ({
	MODAL_A,
	MODAL_B,
	MODAL_C,
	MODAL_D,
	dispatchModalAction,
}) => {
	const {
		control,
		reset,
		formState: { errors },
	} = useFormContext();

	const [selectedTab, setSelectedTab] = React.useState(0);
	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};

	return (
		<>
			<Tabs
				sx={{ borderBottom: 1, borderColor: 'divider' }}
				value={selectedTab}
				onChange={handleTabChange}
			>
				<Tab label='Input Parameters' />
				<Tab label='Constants' />
			</Tabs>
			{selectedTab === 0 && ( ///INPUTS /////////////////////////////
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						flex: 1,
						flexDirection: 'column',
						padding: 16,
						justifyContent: 'space-evenly',
					}}
				>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_A)}>
							<HelpIcon></HelpIcon>
						</IconButton>
						<div className='textDivs'>
							structures (ft<sup>2</sup>)
						</div>
						<Controller
							name='input1'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.input1}
									helperText={errors.input1 ? errors.input1?.message : ''}
								/>
							)}
						/>
					</div>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_B)}>
							<HelpIcon></HelpIcon>
						</IconButton>

						<div className='textDivs'>Annual  (ft)</div>
						<Controller
							name='input2'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.input2}
									helperText={errors.input2 ? errors.input2?.message : ''}
								/>
							)}
						/>
					</div>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_C)}>
							<HelpIcon></HelpIcon>
						</IconButton>
						<div className='textDivs'>
							Area (ft<sup>2</sup>)
						</div>
						<Controller
							name='input3'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.input3}
									helperText={errors.input3 ? errors.input3?.message : ''}
								/>
							)}
						/>
					</div>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_D)}>
							<HelpIcon></HelpIcon>
						</IconButton>
						<div className='textDivs'>
							Area  space (ft<sup>2</sup>)
						</div>
						<Controller
							name='input4'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.input4}
									helperText={errors.input4 ? errors.input4?.message : ''}
								/>
							)}
						/>
					</div>
				</div>
			)}
			{selectedTab === 1 && ( ///CONSTANTS  /////////////////////////////
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						flex: 1,
						flexDirection: 'column',
						padding: 16,
						justifyContent: 'space-evenly',
					}}
				>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_A)}>
							<HelpIcon></HelpIcon>
						</IconButton>
						<div className='textDivs'>
							Area of rainfall collection structures (ft<sup>2</sup>)
						</div>
						<Controller
							name='constant1'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constant1}
									helperText={errors.constant1 ? errors.constant1?.message : ''}
								/>
							)}
						/>
					</div>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_B)}>
							<HelpIcon></HelpIcon>
						</IconButton>

						<div className='textDivs'>
							Area of ctures (ft<sup>2</sup>)
						</div>
						<Controller
							name='constant2'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constant2}
									helperText={errors.constant2 ? errors.constant2?.message : ''}
								/>
							)}
						/>
					</div>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_C)}>
							<HelpIcon></HelpIcon>
						</IconButton>
						<div className='textDivs'>
							Area of res (ft<sup>2</sup>)
						</div>
						<Controller
							name='constant3'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constant3}
									helperText={errors.constant3 ? errors.constant3?.message : ''}
								/>
							)}
						/>
					</div>
					<div
						style={{
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							flex: 1,
							padding: 16,
							justifyContent: 'space-evenly',
						}}
					>
						<IconButton onClick={() => dispatchModalAction(MODAL_D)}>
							<HelpIcon></HelpIcon>
						</IconButton>
						<div className='textDivs'>
							Area of raiructures (ft<sup>2</sup>)
						</div>
						<Controller
							name='constant4'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constant4}
									helperText={errors.constant4 ? errors.constant4?.message : ''}
								/>
							)}
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default HWBForms;
