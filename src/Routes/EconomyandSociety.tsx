import React from 'react';
import { useState } from 'react';
import '../App.css';
import { FormTab } from '../Components/FormTab';
import { MyTextField } from '../Components/MyTextField';

const defaultValues = {
  name: '',

};

export default function EconomyandSociety() {
  const [values, setValues] = useState(defaultValues);
  const { name } = values;
	return (

		<FormTab />








		// <div style={{width: '66%', marginLeft: 'auto', marginRight: 'auto', marginTop: 4, marginBottom: 4 , padding: 8}}>
		// 	<form style={{ marginTop: 8, marginBottom: 8}}>
		// 		<div style={{}}>
		// 			{/* <div style={{width: '100%', display: 'flex', }}>
		// 				<ul style={{display:"flex"}}>
		// 					<li> </li>
		// 					<li> </li>
		// 					<li> </li>
		// 				</ul>
		// 			</div> */}

		// 			<div style={{marginTop: 8, marginBottom: 8}}>
		// 				<h2 style={{marginTop: 4, marginBottom: 4}}>
        //       Contact Info
        //     </h2>
		// 				<div style={{display: 'flex', flexDirection: 'column', flex: 1, marginTop: 2, marginBottom: 2 }}>
		// 					<MyTextField
		// 						label='Your Name'
		// 						type='text'
		// 						placeholder={''}
		// 						onChange={(name) => setValues((prev) => ({
        //           ...prev,
        //           name,
        //         }))
        //         }
        //         value={name}
		// 					/>
		// 						<MyTextField
		// 						label='Your Name'
		// 						type='text'
		// 						placeholder={''}
		// 						onChange={(name) => setValues((prev) => ({
        //           ...prev,
        //           name,
        //         }))
        //         }
        //         value={name}
		// 					/>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</form>
		// </div>
	);
}
