import React from 'react';
import { useParams } from 'react-router-dom';

const productDetails = {
  1: { name: 'Hammer', description: 'A sturdy hammer.' },
  2: { name: 'Screwdriver', description: 'A useful screwdriver.' },
  3: { name: 'Wrench', description: 'An adjustable wrench.' }
};

function ProductDetails() {
  const { id } = useParams();
  const product = productDetails[id];

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
