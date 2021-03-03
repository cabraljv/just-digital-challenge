import React, { useMemo, useState, useCallback } from 'react';
import { TiShoppingCart } from 'react-icons/ti';
import { Container } from './styles';

interface Product {
  id: number;
  picture: string;
  price: number;
  title: string;
  description: string;
  brand: string;
  quantity: number;
}

interface Props {
  active?: boolean;
  product: Product;
  onCancel: () => void;
}

const AddProduct: React.FC<Props> = ({ active, product, onCancel }) => {
  const [units, setUnits] = useState(1);
  const formated_price = useMemo(() => {
    return `${product.price.toFixed(2)}`.replace('.', ',');
  }, [product.price]);
  const formated_total_price = useMemo(() => {
    return `${(product.price * units).toFixed(2)}`.replace('.', ',');
  }, [product.price, units]);

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
                name="units"
                id="units"
                defaultValue={1}
                value={units}
                min={1}
                max={product.quantity}
                onChange={(e) => onChangeUnits(e.target.value)}
              />
              <p>unidades</p>
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
          <button type="button">
            <TiShoppingCart size={18} />
            <p>ADICIONAR AO CARRINHO</p>
          </button>
        </div>
      </main>
    </Container>
  );
};

export default AddProduct;
