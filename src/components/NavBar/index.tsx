import React, { useCallback, useMemo, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Container, CartContainer } from './styles';
import shop_icon from '../../assets/icons/shop.svg';
import { Product } from '../../store/modules/cart/types';

interface CartProps {
  product: Product;
}

const CartItem: React.FC<CartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleRemove = useCallback(() => {
    dispatch({
      type: 'REMOVE_ITEM',
      item: product,
    });
  }, [dispatch, product]);
  const formatted_title = useMemo(
    () =>
      product.title.length > 20
        ? `${product.title.substring(0, 20)}...`
        : product.title,
    [product.title]
  );
  return (
    <CartContainer>
      <div className="product-info">
        <img src={product.picture} alt="" />
        <div className="product-texts">
          <p className="title">{formatted_title}</p>
          <p className="amount">Quantidadee: {product.quantity} unid</p>
        </div>
      </div>
      <button type="button" onClick={handleRemove}>
        REMOVER
      </button>
    </CartContainer>
  );
};

interface Props {
  items: Product[];
}

const NavBar: React.FC<Props> = ({ items }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const history = useHistory();

  return (
    <Container cart_open={cartOpen}>
      <a href="/">
        <img
          src="https://justdigital.com.br/just-logo.2bbdba5a.png"
          alt="Just Digital"
        />
      </a>
      <ul>
        <li>
          <button type="button" onClick={() => setCartOpen(!cartOpen)}>
            <p>Sacola</p>
            <div className="cart">
              <img src={shop_icon} alt="sacola" />
              <span className="cart-items">
                <p>{items.length}</p>
              </span>
            </div>
          </button>
          <div className="cart-list">
            <ul>
              {items.map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
              {items.length === 0 && <p>Nenhum produto no carrinho</p>}

              <li>
                <button
                  className="finish"
                  type="button"
                  disabled
                  onClick={() => history.push('/cart')}
                >
                  FINALIZAR PEDIDO
                </button>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </Container>
  );
};
export default connect((state: Product[]) => ({
  items: state,
}))(NavBar);
