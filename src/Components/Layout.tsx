import React from 'react'
import { AppBar } from '@mui/material'
import { Toolbar } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'

export const Layout = ({ children, props}:{children:any,props:any}) => {
    return (
        <div className='root'>
        {/* <Box sx={{ flexGrow: 1 }}> */}
         <AppBar color='primary' elevation={0} position='static' sx={{ margin: 0}}>
             <Toolbar>
                <Typography>
                    Welcome to Resillience App
                </Typography>
             </Toolbar>
         </AppBar>
         {/* </Box> */}

           <div className='page'>
               {children}
           </div>
        </div>
    )
}
