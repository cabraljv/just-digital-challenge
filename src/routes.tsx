import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Product from './pages/Product';

const Routes: React.FC = () => {
  return (
    <>
      <Route path="/" exact component={Main} />
      <Route path="/product/:id" exact component={Product} />
    </>
  );
};

export default Routes;
