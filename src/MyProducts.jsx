import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './Components/Product';

function LikedProducts({ likedProducts }) {
  return (
    <div className="centered-container">
      <div className="card text-center custom-card">
        <h1>Liked Products</h1>
        <div className="card-body">
          <Grid container spacing={3}>
            {likedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                isLiked={product.isLiked}
                onLikeToggle={() => {}} // Pass an empty function or handle it as needed
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default LikedProducts;
