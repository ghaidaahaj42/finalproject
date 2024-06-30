import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import 'src/styles/Products.css';


export default function productCard(product){
    return(
        <Grid item xs={12} sm={6} md={4} key={product.id}>
        <Card>
          <CardMedia
            component="img"
            alt={product.name}
            height="140"
            image={product.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
}