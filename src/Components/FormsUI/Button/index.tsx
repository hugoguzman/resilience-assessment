import { Button } from '@mui/material';
import * as React from 'react';
import { useFormikContext } from 'formik';


interface Props {
    children: string | number | boolean;
}

const ButtonWrapper: React.FC<Props> = ({
    children,
    ...otherProps
}) => {
    const { submitForm } = useFormikContext();

    const handleSubmit = () => {
        submitForm();
    }

    const configButton = {
        onClick: handleSubmit
    }

    return (
        <Button {...configButton} variant='contained' color='primary' fullWidth>
            {children}
        </Button>


    )

}


export default ButtonWrapper;