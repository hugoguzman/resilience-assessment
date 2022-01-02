import React, { useState, useEffect } from 'react';
// import { Button, Modal } from 'react-bootstrap';
import { Modal, Box, Typography } from '@mui/material';

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
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      
	return (
		<Modal onClose={handleClose} open={show}>
			<Box sx={style}>
                {/* {props.children} */}
				<Typography id='modal-modal-title' variant='h6' component='h2'>
					{props.heading}
				</Typography>
				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					{props.content}
				</Typography>
			</Box>
		</Modal>

		// <Modal show={showModal} onHide={handleClose}>
		//     <>
		//         {props.children}
		//         <Modal.Footer>
		//             <Button variant="secondary" onClick={handleClose}>Close</Button>
		//             {
		//                 showConfirmCallToAction && showConfirmCallToAction === true &&
		//                 <Button variant="primary" className="ModalButton" onClick={confirmButtonAction}>
		//                     {confirmButtonText}
		//                 </Button>
		//             }

		//         </Modal.Footer>
		//     </>
		// </Modal >
	);
});
