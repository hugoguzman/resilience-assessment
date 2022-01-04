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
							Area of rainfall collection structures (ft<sup>2</sup>)
						</div>
						<Controller
							name='inputA'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.inputA}
									helperText={errors.inputA ? errors.inputA?.message : ''}
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

						<div className='textDivs'>Annual rainfall (ft)</div>
						<Controller
							name='inputB'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.inputB}
									helperText={errors.inputB ? errors.inputB?.message : ''}
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
							Area of office space (ft<sup>2</sup>)
						</div>
						<Controller
							name='inputC'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.inputC}
									helperText={errors.inputC ? errors.inputC?.message : ''}
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
							Area of commercial space (ft<sup>2</sup>)
						</div>
						<Controller
							name='inputD'
							control={control}
							defaultValue=''
							render={({ field }) => (
								<TextField
									{...field}
									label='Input'
									variant='outlined'
									error={!!errors.inputD}
									helperText={errors.inputD ? errors.inputD?.message : ''}
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
							name='constantA'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constantA}
									helperText={errors.constantA ? errors.constantA?.message : ''}
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
							Area of rainfall collection structures (ft<sup>2</sup>)
						</div>
						<Controller
							name='constantB'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constantB}
									helperText={errors.constantB ? errors.constantB?.message : ''}
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
							Area of rainfall collection structures (ft<sup>2</sup>)
						</div>
						<Controller
							name='constantC'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constantC}
									helperText={errors.constantC ? errors.constantC?.message : ''}
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
							Area of rainfall collection structures (ft<sup>2</sup>)
						</div>
						<Controller
							name='constantD'
							control={control}
							defaultValue={''}
							render={({ field }) => (
								<TextField
									{...field}
									label='Constant'
									variant='outlined'
									error={!!errors.constantD}
									helperText={errors.constantD ? errors.constantD?.message : ''}
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
