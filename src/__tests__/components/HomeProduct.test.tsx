import { render } from '@testing-library/react';

import HomeProduct from '../../components/HomeProduct';

describe('HomeProduct', () => {
  const product = {
    id: 133453126,
    title: 'Smartphone Motorola Moto G6 Dual Chip Android Oreo...',
    price: 1299,
    picture: 'https://imagens.canaltech.com.br/produto/buscape/o292298908.jpg',
    description:
      'Misturando inovação, modernidade e qualidade, o novo moto g6 chegou...',
    memory: '32GB',
    brand: 'Motorola',
    chipType: 'Nano Chip',
    buy_units: 0,
    quantity: 2,
  };

  it('shold to display item', () => {
    const { getByText } = render(
      <HomeProduct
        id={product.id}
        picture={product.picture}
        price={product.price}
        title={product.title}
      />
    );
    const price = getByText(`${product.price.toFixed(2)}`.replace('.', ','));

    expect(price).toBeTruthy();
  });
});
