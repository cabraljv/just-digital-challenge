import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  id: number;
  picture: string;
  price: number;
  title: string;
}

const HomeProduct: React.FC<Props> = ({ id, picture, price, title }) => {
  const history = useHistory();
  function handleClick() {
    history.push(`/product/${id}`);
  }

  const formated_price = useMemo(() => {
    return `${price.toFixed(2)}`.replace('.', ',');
  }, [price]);

  const formatted_title = useMemo(
    () => (title.length > 40 ? `${title.substring(0, 40)}...` : title),
    [title]
  );
  return (
    <Container onClick={handleClick}>
      <img src={picture} alt="" />
      <div className="product-footer">
        <p className="product-title">{formatted_title}</p>
        <div className="price">
          <span className="price-value">
            R$ <span>{formated_price}</span>
          </span>
          <p className="suport-text">À VISTA NO BOLETO</p>
        </div>
      </div>
    </Container>
  );
};

export default HomeProduct;
