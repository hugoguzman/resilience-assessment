import React from 'react';
import {
	Drawer as MUIDrawer,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

const NavDrawer = ({ openDrawer, setOpenDrawer }: {openDrawer: any, setOpenDrawer: any}) => {
	return (
		<MUIDrawer anchor='right' open={openDrawer}>
			<List>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link to='/'>
						<ListItemText primary='Home' />
					</Link>
				</ListItem>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link
						to={{
							pathname: '/health-and-wellbeing',
						}}
					>
						<ListItemText primary='Health & Wellbeing' />
					</Link>
				</ListItem>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link to='/economy-and-society'>
						<ListItemText primary='Economy & Society' />
					</Link>
				</ListItem>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link to='/infrastructure-and-environment'>
						<ListItemText primary='Infrastructure & Environment' />
					</Link>
				</ListItem>
				<ListItem divider button onClick={() => setOpenDrawer(false)}>
					<Link to='/leadership-and-strategy'>
						<ListItemText primary='Leadership & Strategy' />
					</Link>
				</ListItem>
			</List>
		</MUIDrawer>
	);
};

export default NavDrawer;