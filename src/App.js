import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Layouts
import Header from 'components/Header';

// Config
import store from 'config/store';
import Routes from 'config/routes';

// Common Styles
import './assets/styles/app.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Routes />
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
