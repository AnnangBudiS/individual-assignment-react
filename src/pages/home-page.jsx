import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';

const HomePage = () => {
  const [product, setProduct] = useState([]);

  const getAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return (
    <div className="pt-24">
      {product ? (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:container lg:mx-auto">
          {product.map((items, key) => (
            <Card
              key={key}
              title={items.title}
              img={items.image}
              price={formatter.format(items.price)}
              rating={items.rating.rate}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default HomePage;
