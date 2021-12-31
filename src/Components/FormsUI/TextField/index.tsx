import React from 'react'
import { Button, TextField, Typography, IconButton } from '@mui/material';
import { useField } from 'formik'

// interface Props {
//     name: string;

// }


const TextfieldWrapper: React.FC<any> = ({
    name,
    ...otherProps
}) => {
    const [field, meta] = useField(name);

    const configTextfield = {
        ...field,
        ...otherProps,
        
    };

    if (meta && meta.touched && meta.error) {
        configTextfield.error = true;
        configTextfield.helperText = meta.error;
    }

    return (
        <TextField variant='outlined' fullWidth {...configTextfield} />
    );
};

export default TextfieldWrapper;