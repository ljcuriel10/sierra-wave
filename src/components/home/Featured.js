import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'




const Featured = () => {
  
  return (
    <>
      <Card sx={{position: 'absolute', width:'100%'}}>
        
          
          <CardMedia
          component='img'
          image='https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='Under Construction' 
          height='500'
          
          />
          <CardContent sx={{position:'absolute', top:4, width:'100%', textAlign:'center', mt:"10em"}}>
           <Typography
            gutterBottom
            variant='h3'
            component='h3'
            sx={{  color:'white', fontFamily:'Comic Sans MS'}}
            >
              All Your Must Have June Lake Gear!
            </Typography>
            <Button color='error' variant='contained'>Shop Now</Button>
          </CardContent>
      </Card>
    </>
    
  )
}

export default Featured