import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'

export default function EditCard({title, price, description, image, rating}) {
    const deleteItem=()=>{
      console.log()
      // const confirm=await axios.post('http://localhost:5000/products/delete',[title])
    }
    const editItem=()=>{

    }

  return (
    <Card sx={{ width: 320, padding:"10px" }}>
      <CardMedia
        sx={{ height: 200, objectFit:"contain" }}
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title.substring(0,18)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description.substring(0,130)}
        </Typography>
        <br/>
        <Typography>{ `Price: $${price}`}</Typography>
        <Typography>{ `Rating: ${rating}/5`}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained' onClick={deleteItem}>Edit</Button>
        <Button size="small"variant='outlined' onClick={editItem}>Delete</Button>
      </CardActions>
    </Card>
  );
}