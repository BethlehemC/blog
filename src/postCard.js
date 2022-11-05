import React from 'react'
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { blue, red } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import CardActions from '@mui/material/CardActions';

import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { useState } from "react";


export default function PostCard(title, auther) {
    const [count,setCount]=useState(0)
    const images=[
        {src:'./tree.jpg' , alt:'tree'},
        {src:'./mountaines.jpg'},
        {src:'./grass.jpg'},
        {src:'./surrise.jpg'}]
    
  return (
    
      <Card sx={{ maxWidth: 345 , bgcolor: blue[200] ,fontSize:100 ,fontFamily:"https://fonts.googleapis.com/css?family=Sofia"}}>
        <CardHeader
                  avatar={
            <Avatar sx={{ bgcolor: blue[900] , fontSize:14 }} aria-label="recipe">
              BLOG
            </Avatar>
          }
          
          title={title}
          subheader={auther}
        /> 
        <CardMedia
          component="img"
          height="194"
        image={process.env.PUBLIC_URL + images[Math.floor(Math.random() * (3 - 0 + 0) + 0)].src} 
          alt="Paella dish"
        />
      
        <CardActions disableSpacing>
      
      <IconButton aria-label="add to favorites">
        <button onClick={()=>{setCount(count+1)}} >like{count} </button>
      </IconButton>
      <IconButton aria-label="share">
          <button>share</button>
      </IconButton>

    </CardActions>
    </Card>
  )
}
