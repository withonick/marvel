import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Character = ({ data }) => {
  let navigate=useNavigate();
  return (
    <>
      {
        (data) ? (
          data.map(item => {
            return (
            <Card sx={{ maxWidth: 345 }} key={item.id}
                  onClick={()=>navigate(`/${item.id}`)}>
              <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>

          )
          })
        ):""
      }


    </>
  )
}

