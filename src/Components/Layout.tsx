import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Typography } from '@mui/material'


export const Layout = ({ children, props}:{children:any,props:any}) => {
    return (
        <div>
         <AppBar color='transparent' elevation={1} position='static' sx={{alignItems: 'center'}}>
             <Toolbar>
                <Typography variant='h4'>
                   Resilience Design Assesment Tool
                </Typography>
             </Toolbar>
         </AppBar>
           
           <div className='page'>
               {children}
           </div>
           {/* ^^^ dom nesting issue is being caused by this ^^^ */}
           <footer style={{textAlign: 'center'}}> ©FIU 2021</footer>
        </div>
    )
}
