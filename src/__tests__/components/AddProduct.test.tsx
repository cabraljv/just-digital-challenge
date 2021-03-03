import { fireEvent, render } from '@testing-library/react';

import { Provider } from 'react-redux';
import AddProduct from '../../components/AddProduct';
import reducer from '../../store';

describe('AddProduct', () => {
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

  it('shold to add item', () => {
    const { getByLabelText } = render(
      <Provider store={reducer}>
        <AddProduct onCancel={() => 0} active product={product} />
      </Provider>
    );
    const input = getByLabelText('unidades');

    fireEvent.change(input, { target: { value: '2' } });

    expect(input.value).toBe('2');
  });
  it('shold to display max quantity', () => {
    const { getByLabelText } = render(
      <Provider store={reducer}>
        <AddProduct onCancel={() => 0} active product={product} />
      </Provider>
    );
    const input = getByLabelText('unidades');

    fireEvent.change(input, { target: { value: '5' } });

    expect(input.value).toBe('2');
  });
});
