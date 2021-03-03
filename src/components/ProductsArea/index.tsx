import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '../../services/api';
import HomeProduct from '../HomeProduct';

interface Product {
  id: number;
  title: string;
  price: number;
  picture: string;
}

interface APIResponse {
  products: Product[];
}

const ProductsArea: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get<APIResponse>('/');
      if (response.status === 200) {
        setProducts(response.data.products);
      }
    }

    getProducts();
  }, []);

  return (
    <Container>
      <header>
        <h3>Novidades</h3>
        <p>Confira os ultimos produtos cadastrados na loja</p>
      </header>
      <div className="products-content">
        {products &&
          products?.map((item) => (
            <HomeProduct
              title={item.title}
              key={item.id}
              picture={item.picture}
              price={item.price}
              id={item.id}
            />
          ))}
      </div>
    </Container>
  );
};

export default ProductsArea;
