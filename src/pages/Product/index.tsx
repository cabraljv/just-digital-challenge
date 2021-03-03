import React, { useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TiShoppingCart } from 'react-icons/ti';
import NavBar from '../../components/NavBar';
import api from '../../services/api';
import { Container } from './styles';
import HomeProduct from '../../components/HomeProduct';
import AddProduct from '../../components/AddProduct';
import { Product as IProduct } from '../../store/modules/cart/types';

interface Params {
  id: string;
}

interface APIResponse {
  products: IProduct[];
}

const Product: React.FC = () => {
  const [product, setProduct] = useState<IProduct>();
  const [recomended, setRecomended] = useState<IProduct[]>([]);
  const [addOpen, setAddOpen] = useState(false);

  const { id } = useParams<Params>();
  useEffect(() => {
    async function getData() {
      const response = await api.get<APIResponse>(`/`);
      if (response.status !== 200) {
        // eslint-disable-next-line no-alert
        alert('Ocorreu um erro ao carregar o produto');
      }
      const find_product = response.data.products.find(
        (item) => `${item.id}` === id
      );
      if (find_product) {
        setProduct(find_product);
        const recommended_products = response.data.products.filter(
          (item) => `${item.id}` !== id
        );
        setRecomended(recommended_products);
      }
    }
    getData();
  }, [id]);
  const formated_price = useMemo(() => {
    return `${product?.price.toFixed(2)}`.replace('.', ',');
  }, [product?.price]);
  return (
    <>
      <NavBar />
      <Container>
        <div className="content">
          {product && (
            <div className="product-data">
              <img src={product.picture} alt="" />
              <div className="info">
                <div className="header">
                  <h1>{product.title}</h1>
                  <span>
                    <p>{product.quantity} disponíveis</p>
                  </span>
                </div>
                <p className="description">{product.description}</p>
                <div className="footer">
                  <div className="price">
                    <span className="price-value">
                      R$ <span>{formated_price}</span>
                    </span>
                  </div>
                  <button type="button" onClick={() => setAddOpen(true)}>
                    <TiShoppingCart size={25} />
                    <p>ADICIONAR AO CARRINHO</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          <p className="recomended-text">
            Outros produtos que talvez você goste
          </p>
          <div className="recomended-products">
            {recomended.map(
              (item) =>
                `${item.id}` !== id && (
                  <HomeProduct
                    title={item.title}
                    key={item.id}
                    picture={item.picture}
                    price={item.price}
                    id={item.id}
                  />
                )
            )}
          </div>
        </div>
      </Container>
      {product && (
        <AddProduct
          active={addOpen}
          product={product}
          onCancel={() => setAddOpen(false)}
        />
      )}
    </>
  );
};

export default Product;
