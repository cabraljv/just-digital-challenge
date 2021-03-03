import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container, CartContainer } from './styles';
import shop_icon from '../../assets/icons/shop.svg';

const NavBar: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const history = useHistory();

  return (
    <Container cart_open={cartOpen} menu_open={menuOpen}>
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
                <p>3</p>
              </span>
            </div>
          </button>
          <div className="cart-list">
            <ul>
              <p>Nenhum produto no carrinho</p>

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

export default NavBar;
