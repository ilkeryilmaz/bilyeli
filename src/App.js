import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

// Routes
import Routes from './config/routes';
import store from './config/store';

// Layouts
import AppLayout from './components/AppLayout';
import Content from './components/Content';
import Container from './components/Container';
import Navigation from './components/Navigation';
import Header from './components/Header';

// Common Styles
import './assets/styles/app.scss';


const App = () => (
  <Provider store={ store }>
    <BrowserRouter>
      <AppLayout>
        <Container>
          <Header>
            <Navigation />
          </Header>
          <Content>
            <Routes />
          </Content>
        </Container>
      </AppLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
