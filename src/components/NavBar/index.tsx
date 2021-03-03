import React, { useCallback, useMemo, useState } from 'react';

import { useHistory, Link } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { Container, CartContainer } from './styles';
import shop_icon from '../../assets/icons/shop.svg';
import { Product } from '../../store/modules/cart/types';

interface CartProps {
  product: Product;
}

const CartItem: React.FC<CartProps> = ({ product }) => {
  const dispatch = useDispatch();

  // Título limitado a 20 caracteres para manter o layout
  const formatted_title = useMemo(
    () =>
      product.title.length > 20
        ? `${product.title.substring(0, 20)}...`
        : product.title,
    [product.title]
  );

  // ao adicionar ou remover um item no input
  const onChangeUnits = useCallback(
    (e: string) => {
      const units = parseInt(e, 10);
      if (units === 0) {
        dispatch({
          type: 'REMOVE_ITEM',
          item: product,
        });
      }
      if (!units) {
        return;
      }
      if (units > product.quantity) {
        return;
      }
      if (units < product.buy_units) {
        dispatch({
          type: 'REMOVE_ITEM',
          item: { ...product, buy_units: product.buy_units - units },
        });
      } else {
        dispatch({
          type: 'ADD_ITEM',
          item: { ...product, buy_units: units - product.buy_units },
        });
      }
    },
    [dispatch, product]
  );

  return (
    <CartContainer>
      <div className="product-info">
        <img src={product.picture} alt="" />
        <div className="product-texts">
          <p className="title">{formatted_title}</p>
          <p className="amount">Disponível: {product.quantity} unid</p>
        </div>
      </div>
      <div className="units">
        <input
          type="number"
          name="units"
          id="units"
          value={product.buy_units}
          min={0}
          max={product.quantity}
          onChange={(e) => onChangeUnits(e.target.value)}
        />
        <p>unidades</p>
      </div>
    </CartContainer>
  );
};

interface Props {
  items: Product[];
}

const NavBar: React.FC<Props> = ({ items }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const history = useHistory();

  // Soma total do valor de todos os items no carrinho
  const total_cart = useMemo(() => {
    let aux = 0;
    items.forEach((atual) => (aux += atual.buy_units * atual.price));
    return aux;
  }, [items]);

  return (
    <Container cart_open={cartOpen}>
      <Link to="/">
        <img
          src="https://justdigital.com.br/just-logo.2bbdba5a.png"
          alt="Just Digital"
        />
      </Link>
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
              <>
                {items.map((item) => (
                  <CartItem key={item.id} product={item} />
                ))}
                <p className="total-value">
                  R$ <span>{total_cart}</span>
                </p>
              </>
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
