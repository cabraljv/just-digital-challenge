import React from 'react';
import NavBar from '../../components/NavBar';
import ProductsArea from '../../components/ProductsArea';
import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <NavBar />
      <Container>
        <ProductsArea />
        <footer>
          Feito por{' '}
          <a href="https://www.linkedin.com/in/cabraljv/">João Victor Cabral</a>
        </footer>
      </Container>
    </>
  );
};

export default Main;
