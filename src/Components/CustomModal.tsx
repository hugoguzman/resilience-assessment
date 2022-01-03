import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React, { useEffect, useState } from 'react';

export const CustomModal = React.forwardRef((props: any, ref) => {
	const { show } = props;

	const [showModal, setShowModal] = useState<boolean>();

	useEffect(() => {
		setShowModal(show);
	}, [show]);

	const handleClose = () => {
		setShowModal(false);
		props.close();
	};

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '75%',
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};

	return (
		<>
			<Dialog open={show} onClose={handleClose}>
				<DialogTitle>{props.heading}</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-description'>
						{props.body}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Close</Button>
				</DialogActions>
			</Dialog>
		</>
	);
});
