import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Grid } from '@mui/material';
import '../styles/Products.css';
import ProductCard from './Components/Product';
const products = [
  { id: 1, name: ' Lego Package', description: 'This is product 1', image: 'https://www.lego.com/cdn/cs/set/assets/blt61f68cd89d49cc06/11029_alt1.png' },
  { id: 2, name: 'Chess', description: 'This is product 2', image: 'https://5.imimg.com/data5/PG/LD/CL/SELLER-14274915/magnetic-chess-game.jpg' },
  { id: 3, name: 'Product 3', description: 'This is product 3', image: 'https://m.media-amazon.com/images/I/71x1TrqgSmL._AC_UF894,1000_QL80_.jpg' },
  { id: 4, name: ' Lego Package', description: 'This is product 1', image: 'https://www.lego.com/cdn/cs/set/assets/blt61f68cd89d49cc06/11029_alt1.png' },
  { id: 5, name: 'Chess', description: 'This is product 2', image: 'https://5.imimg.com/data5/PG/LD/CL/SELLER-14274915/magnetic-chess-game.jpg' },
  { id: 6, name: 'Product 3', description: 'This is product 3', image: 'https://m.media-amazon.com/images/I/71x1TrqgSmL._AC_UF894,1000_QL80_.jpg' },
  // Add more products as needed
];

function Products() {
  return (
    <div className="centered-container">
      <div className="card text-center custom-card">
        <h1>Explore Our Products</h1>
        <div className="card-body">
          <Grid container spacing={3}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Products;
