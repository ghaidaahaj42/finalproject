import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, IconButton,Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../../styles/product.css'
export default function ProductCard({ id, name, description, image }) {
  return (
    <Grid item xs={12} sm={6} md={4} key={id}>
      <Card className="product-card">
        <CardMedia
          component="img"
          alt={name}
          height="140"
          image={image}
          className="product-image"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div" className="product-name">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" className="product-description">
            {description}
          </Typography>
          <Box className="icon-container">
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}