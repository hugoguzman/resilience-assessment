import '../App.css';
import { Button, Container, Grid, Typography } from '@mui/material';
import '../Components/HealthWB.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextfieldWrapper from '../Components/FormsUI/TextField';
import ButtonWrapper from '../Components/FormsUI/Button';
import LayoutCards from '../Components/LayoutCards';






const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
  .required('Required'),
  lastName: Yup.string()
  .required('Required'),
  email: Yup.string()
  .email('Invalid email.')
  .required('Required'),
  phone: Yup.number()
  .integer()
  .typeError('Please enter a vaild phone number')
  .required('Required'),
});



export default function LeadershipandStrategy() {
	return (
		<>
			<header className='HealthHead'>
				<Typography variant='h6' sx={{ fontWeight: 'bold' }}>
					Leadership and Strategy
				</Typography>{' '}
				<Typography variant='body1'>
					{' '}
					This dimension relates to leadership and strategy.
				</Typography>
			</header>
			<Container sx={{ display: 'flex', flexDirection: 'column' }}>
				<Formik
          initialValues={{
            ...INITIAL_FORM_STATE
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={values => {
            console.log(values);
          }}
        >
					<Form>
						<Grid
							container
							spacing={3}
							direction={'column'}
							sx={{ paddingTop: 6, paddingBottom: 6, display: 'flex', flex: 1 }}
						>
							<Grid item xs={12} sm={6} md={3}>
								<Typography
									variant='h6'
									sx={{ textAlign: 'center', fontWeight: 'bold' }}
								>
									Input
								</Typography>
								<Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
									Question 1: How are essential resources for a person's basic
									physiological needs provided or accessible? (energy, water,
									food, shelter, waste)
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<p>
									<Typography>1A. Section Title</Typography>
								</p>
                <TextfieldWrapper
                  name='firstName'
                  label="First Name"
                />
								{/* <LayoutCards /> */}
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								{/* <LayoutCards /> */}
                <TextfieldWrapper
                  name='lastName'
                  label="Last Name"
                />
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								{/* <LayoutCards /> */}
                <TextfieldWrapper
                  name='email'
                  label="email"
                />
							</Grid>
              <Grid item xs={12} sm={6} md={3}>
								{/* <LayoutCards /> */}
                <TextfieldWrapper
                  name='phone'
                  label="Phone"
                />
							</Grid>
							<Grid item xs={12} sm={6} md={3}>
								<ButtonWrapper>Submit Form</ButtonWrapper>
							</Grid>
						</Grid>
					</Form>
				</Formik>
			</Container>
		</>
	);
}
