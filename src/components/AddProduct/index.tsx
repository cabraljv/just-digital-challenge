/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useMemo, useState, useCallback } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { connect, useDispatch } from 'react-redux';
import { Product } from '../../store/modules/cart/types';
import { Container } from './styles';

interface Props {
  active?: boolean;
  product: Product;
  items: Product[];
  onCancel: () => void;
}

const AddProduct: React.FC<Props> = ({ active, product, onCancel, items }) => {
  const [units, setUnits] = useState(1);

  const dispatch = useDispatch();

  // Ao adicionar algum item ao carrinho
  const handleAddCart = useCallback(() => {
    const item_exists = items.find((item) => item.id === product.id);
    if (item_exists) {
      if (item_exists.buy_units + units > item_exists.quantity) {
        // eslint-disable-next-line no-alert
        alert('Quantidade máxima de estoque exedida');
        return;
      }
    }

    dispatch({
      type: 'ADD_ITEM',
      item: { ...product, buy_units: units },
    });
    onCancel();
  }, [dispatch, product, units, onCancel, items]);

  const formated_price = useMemo(() => {
    return `${product.price.toFixed(2)}`.replace('.', ',');
  }, [product.price]);
  const formated_total_price = useMemo(() => {
    return `${(product.price * units).toFixed(2)}`.replace('.', ',');
  }, [product.price, units]);

  // Ao alterar o número de unidades no input
  const onChangeUnits = useCallback(
    (e: string) => {
      const in_number = parseInt(e, 10);
      if (in_number > product.quantity) {
        setUnits(product.quantity);
      } else {
        setUnits(in_number);
      }
    },
    [product.quantity]
  );

  return (
    <Container active={active}>
      <main>
        <div className="product-content">
          <img src={product.picture} alt={product.title} />
          <div className="product-info">
            <p className="title">{product.title}</p>
            <div className="price">
              <span className="price-value">
                R$ <span>{formated_price}</span>
              </span>
              <p className="suport-text">por unidade</p>
            </div>
            <div className="units">
              <input
                type="number"
                name="product-units"
                id="product-units"
                value={units}
                min={1}
                max={product.quantity}
                onChange={(e) => onChangeUnits(e.target.value)}
              />
              <label htmlFor="product-units">unidades</label>
            </div>
            <p className="total-product">
              Total do produto: <span>R${formated_total_price}</span>
            </p>
          </div>
        </div>
        <div className="buttons">
          <button type="button" onClick={onCancel}>
            Cancelar
          </button>
          <button type="button" onClick={handleAddCart}>
            <TiShoppingCart size={18} />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
      </main>
    </Container>
  );
};

export default connect((state: Product[]) => ({
  items: state,
}))(AddProduct);
