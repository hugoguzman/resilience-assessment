import React from 'react'
import { Card, CardHeader, CardContent, IconButton, Typography } from '@mui/material'
import HelpIcon from '@mui/icons-material/Help';

export const LayoutCards = () => {
    return (
        <div>
         <Card elevation={3}>
             <CardHeader
             action={
                 <IconButton onClick={() => console.log('open help modal')}>
                     <HelpIcon />
                 </IconButton>
             }
             title="Title"
             subheader="subHeader"
             />
             <CardContent>
                 <Typography variant="body2" color="textSecondary">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus aut dolor nam magnam eaque ad deserunt culpa. Inventore quisquam qui unde nihil iste eius ratione blanditiis! At, asperiores sint.
                 </Typography>
             </CardContent>
         </Card>
        </div>
    )
}
