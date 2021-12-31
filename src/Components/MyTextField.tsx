import React from 'react';

interface Props {
    label: string;
    type: string;
    placeholder: string;
    value: string | number;
    onChange: (value: string) => void;
}



export const MyTextField: React.FC<Props> = ({ type, label, placeholder, value, onChange = () => {}}) => {
	const id = label
		.toLowerCase()
		.split(' ')
		.map((word) => word.replace(/[^a-z]+/g, ''))
		.join('-');
        console.dir(id);
	return (
		<div style={{ marginRight: 2, flex: 1 }}>
			<div>
				<label style={{ marginLeft: 1 }} htmlFor='fullName'>
					{label}
				</label>
				:
			</div>
			<input
				style={{ border: 'rounded-sm', padding: 2, width: 'full' }}
				type={type}
				id='fullName'
				placeholder={placeholder}
                onChange={(e: any) => onChange(e.target.value)}
                value={value}
			/>
		</div>
	);
};
