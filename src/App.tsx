import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <BrowserRouter basename={process.env.REACT_APP_URL}>
          <Routes />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
