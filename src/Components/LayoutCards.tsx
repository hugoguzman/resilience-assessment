import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { ConstantsCard } from './ConstantsCard';
import { ParameterCard } from './ParameterCard';
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import { TextField } from '@mui/material';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, marginTop: 3, width: '100%'}}>
         
          {children}
         
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function LayoutCards() {
  // const intitalState = {
	// 	ConstA: 0,
	// 	ConstB: 0,
	// 	ConstC: 0,
	// 	ConstD: 0,
	// };

	// const { onChange, onSubmit, values } = useForm(
	// 	loginUserCallback,
	// 	intitalState
	// );

	//submit function that executes on form submission
	async function loginUserCallback() {
		//send 'values' to database
	}
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  const { register, control, formState } = useForm({
    mode: "onBlur",
    reValidateMode: "onChange",
    shouldUnregister: false
    // defaultValues
  });

  console.log(`form isDirty=${formState.isDirty}`);
  console.log(formState.dirtyFields);

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Input Parameters" {...a11yProps(0)} />
          <Tab label="Constants" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ParameterCard onSubmit={({ inputParam, inputParam1, inputParam2, inputParam3 }) => {
          console.log(inputParam, inputParam1, inputParam2, inputParam3)
        }}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ConstantsCard />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
   
  );
}
